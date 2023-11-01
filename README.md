# Welcome to PROJECT NAME

hello, is me.

## Prepare

- Node: >= 16.0.0.
- IDE: VSCode.
- Extension:
  [Eslint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint),
  [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)

## After clone project

Run `npm run prepare` to install husky.

## Things to note

- We using [MUI system](https://mui.com/system/getting-started/) to build web component.
- We using [Arm Chart 5](https://www.amcharts.com/docs/v5/) to build chart component.
- Update theme color in `lightPlette.ts`.
- For styling component, using [sxProps](https://mui.com/system/getting-started/the-sx-prop/).
- DO NOT using fixed text in html. Use translation in i18n. For example we use `en.ts`.
- DO NOT using Link, using RLink instead.
- Please using RLink to navigate page instead of Button and navigate in click event.
- If you want to go back, please using useNavigateBack.
- Yup just able to validate data, not able to update data. Remember that. For example, when you validate a string field with trim(), you can using Yup.trim() but this is just for validate only, the value still have space as their own value.
