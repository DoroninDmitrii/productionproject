import { Project, SyntaxKind } from 'ts-morph';

const removeFeatureName = process.argv[2];
const featureState = process.argv[3];

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

project.addSourceFilesAtPaths('src/**/*.ts');
project.addSourceFilesAtPaths('src/**/*.tsx');

const files = project.getSourceFiles();

files.forEach((sourceFile) => {
  sourceFile.forEachDescendant(node => {
    if (node.isKind(SyntaxKind.CallExpression)) {

      let isToggleFeatures = false;

      node.forEachChild(child => {
        if (child.isKind(SyntaxKind.Identifier) && child.getText() === 'toggleFeatures') {
          isToggleFeatures = true;
        }
      })

      const objectOptions = node.getFirstDescendantByKind(SyntaxKind.ObjectLiteralExpression);

      const onFunctionPropery = objectOptions?.getProperty('on');
      const offFunctionPropery = objectOptions?.getProperty('off');

      const featureNameProperty = objectOptions?.getProperty('name');

      const onFunction = onFunctionPropery?.getFirstDescendantByKind(SyntaxKind.ArrowFunction);
      const offFunction = offFunctionPropery?.getFirstDescendantByKind(SyntaxKind.ArrowFunction);
      const featureName = featureNameProperty?.getFirstDescendantByKind(SyntaxKind.StringLiteral)?.getText().slice(1, -1);

      if (featureName !== removeFeatureName) return;

      if (featureState === 'on') {
        node.replaceWithText(onFunction?.getBody().getText() ?? '');
      }

      if (featureState === 'off') {
        node.replaceWithText(offFunction?.getBody().getText() ?? '');
      }
    }
  })

});

project.save();
