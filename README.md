# Contentful Experience

This repository is dedicated to testing and investigating the behavior of the Contentful Experience site and logic. It contains various custom components built to integrate with Contentful's Experience Builder.

## Description

A collection of React components designed to work with Contentful's Experience SDK, allowing for visual component composition and dynamic content management.

## Components

The repository includes several components:

- Button
- ComponentCard
- Tab
- Toggle
- Select
- Carousel
- And more...

## Installation

To install dependencies:

```bash
npm i
```

## Running the Project

To start the development server:

```bash
npm run dev
```

## Usage

Components in this repository are registered with Contentful's Experience SDK and can be used in the Contentful Experience Builder interface.

Each component comes with a definition file that specifies its properties, validations, and default values for the Contentful interface.

## Development

To create new components, follow the pattern established by existing components:

1. Create the component itself
2. Define its Contentful definition
3. Register it in the `registeredComponents.ts` file
