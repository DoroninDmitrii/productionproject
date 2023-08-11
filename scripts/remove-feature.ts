import { Project } from 'ts-morph';

const project = new Project({});

project.addSourceFilesAtPaths('src/**/ArticleDetailsPage.tsx');
project.addSourceFilesAtPaths('src/**/*.tsx');

const files = project.getSourceFiles();


files.forEach((sourceFile) => {

});

project.save();
