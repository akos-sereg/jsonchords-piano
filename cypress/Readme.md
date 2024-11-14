# E2E Testing

## Run tests locally

1. Make sure that your local environment is configured with `InMemory` backend, see: `app/services/ConfigService.ts`
2. Start your local instance `npm start`
3. Star Cypress: `npm run cypress:open`

## Run on another environment

Alternatively, you can run the E2E tests aginast another environment, by changing the `WEBAPP_URL_ROOT` URL in
`cypress/constants.ts`

## Development Notes

I personally do not like to see Selectors in E2E test codes, so I extracted them into `cypress/page-map.ts`. This way, it
is easier to maintain E2E tests in case of frontend UI changes - think about multiple E2E tests referencing the same
element. Also, I think this way E2E tests are more human readable.
