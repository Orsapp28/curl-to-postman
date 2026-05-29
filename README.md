# Curl & Postman

Practice hitting real public APIs from two different tools — the cURL command line and Postman.  You'll save your work as you go so you have an artifact to look back at.

## Requirements

### 1. cURL — pick an API and explore it

Pick **one** of the public APIs below and use the `curl` command to make at least three different requests against it.  Read its docs to figure out the available endpoints.

**APIs to use**:
- [JSONPlaceholder](https://jsonplaceholder.typicode.com/) — fake REST API for prototyping (supports GET, POST, PUT, DELETE)
- [Cat Facts](https://catfact.ninja/fact)
- [Advice Slip](https://api.adviceslip.com/)
- [The Dog API](https://thedogapi.com/)
- [Open-Meteo Weather](https://open-meteo.com/) — no API key needed
- [Random User Generator](https://randomuser.me/)
- [Star Wars API (SWAPI)](https://swapi.dev/)

> Most free public APIs **only** support `GET` (letting strangers `POST` to your database is a recipe for disaster).  JSONPlaceholder fakes the others if you want to practice them.

As you run each `curl` command, save it to `solutions/curl.md` so you have a record of your queries and what they returned.

### 2. Postman — pick a *different* API and build a collection

Now do the same in Postman, with a **different** API from the list (or pick one from the collections below).  Instead of copy/pasting commands, save your requests into a single **Postman collection** and export it as JSON into `solutions/postman.json` (the file is already scaffolded in the repo).

**API collections**:
- [Public APIs (GitHub)](https://github.com/public-apis/public-apis)
- [Free APIs](https://free-apis.github.io/#/)

### 3. Commit `solutions/curl.md` and `solutions/postman.json` so the results can be reviewed.

## Things to think about
- What does the response status code tell you about whether the call succeeded?  Compare a successful `200` to a `404` you can trigger by mistyping the URL.
- Request headers vs response headers — what's the difference, and where do you see them in Postman vs cURL?
- Which tool would you reach for in different scenarios — quick one-off probe vs. building a saved test suite?

## Stretch
- Use Postman to chain two requests: take a value from the response of request A and use it in request B (e.g. fetch a list of users, then fetch one specific user by ID).
- Use cURL's `-H` flag to send a custom request header (e.g. `User-Agent: Code Platoon`) and verify it on a service like [httpbin.org/headers](https://httpbin.org/headers).
- Try a `POST` with a JSON body against JSONPlaceholder using both tools.

> Stuck? Have a code error? Use the ["4 Before Me"](https://docs.google.com/document/d/1nseOs5oabYBKNHfwJZNAR7GlU0zkZxNagsw63AD7XV0/edit) debugging checklist to help you solve it!
