# Node Major Minor

First Challange of Node - [Rocketseat](https://rocketseat.com.br/) Bootcamp (GoStack 5.0).

## Challange
Configure an application using **Express.js**, **Nunjucks**, **EditorConfig**, and **ESLint**.

### Routes
> **`/`**: The initial route, which renders a page with a form with a single `age` field, which represents the age of the user.

> **`/check`**: The route called by the homepage form, with POST method, which checks if the age is greater than 18 and redirects the user to the route `/major`, otherwise redirects to the route `/minor` (remember to send the age as Query Param in the redirection)

> **`/major`**: The route which renders a page with the text `You are over age and are x years old.`, `x` must be the value inputted in the form.

> **`/minor`**: The route which renders a page with the text `You are under age and are x years old.`, `x` must be the value inputted in the form.

### Middlewares
It should have a middleware that is called on the `major` and `minor` routes and check if the Query Param **age** exists. If it doesn't exist, should redirect to the form page, if it exists just continue.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.
