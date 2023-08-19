import { Project, SyntaxKind, JsxAttribute } from 'ts-morph';

const removeFeatureName = process.argv[2];
const featureState = process.argv[3];

const toggleComponentName = 'ToggleFeatures';

if (!removeFeatureName) {
  throw new Error('Write the name of feature');
}

if (!featureState) {
  throw new Error('Write the state of feature')
}

if (featureState !== 'on' && featureState !== 'off') {
  throw new Error('Incorrect value of the feature state')
}

const project = new Project({});

// project.addSourceFilesAtPaths('src/**/*.ts');
project.addSourceFilesAtPaths('src/**/ArticleDetailsPage.tsx');

const files = project.getSourceFiles();

const getAttributeNodeByName = (
  jsxAttributes: JsxAttribute[],
  name: string,
) => {
  return jsxAttributes.find((node) => node.getName() === name);
};

const getReplacedComponent = (attribute?: JsxAttribute) => {
  const value = attribute
      ?.getFirstDescendantByKind(SyntaxKind.JsxExpression)
      ?.getExpression()
      ?.getText();

  if (value?.startsWith('(')) {
      return value.slice(1, -1);
  }
  return value;
};

files.forEach((sourceFile) => {
  sourceFile.forEachDescendant(node => {
    if (node.isKind(SyntaxKind.JsxSelfClosingElement)) {

      let isToggleFeatures = false;

      node.forEachChild(child => {
        if (child.isKind(SyntaxKind.Identifier) && child.getText() === toggleComponentName) {
          isToggleFeatures = true;
        }
      })

      const attributes = node.getDescendantsOfKind(SyntaxKind.JsxAttribute);

      const onAttribute = getAttributeNodeByName(attributes, 'on');
      const offAttribute = getAttributeNodeByName(attributes, 'off');
    
      const featureNameAttribute = getAttributeNodeByName(attributes, 'feature');
      const featureName = featureNameAttribute
          ?.getFirstDescendantByKind(SyntaxKind.StringLiteral)
          ?.getText()
          ?.slice(1, -1);
    
      if (featureName !== removeFeatureName) return;
    
      const offValue = getReplacedComponent(offAttribute);
      const onValue = getReplacedComponent(onAttribute);
    
      if (featureState === 'on' && onValue) {
          node.replaceWithText(onValue);
      }
    
      if (featureState === 'off' && offValue) {
          node.replaceWithText(offValue);
      }
    }
  })

});

project.save();
