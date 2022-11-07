# Bulletin Board

## Prerequisites:

- npm
- node
- mysql

## Getting Started:

- Create a .env file:

  ```
  DB_HOST = localhost
  DB_NAME = bulletin_board
  DB_USER = root
  DB_PASS = root
  ```

- To run the database: Type mysql into the terminal and run the following command:
  CREATE DATABASE bulletin_board;

- Run npm install.

- Run npm run migrate.

- To run the backend: Run npm start.

- To run the frontend: cd into client and run npm start.

- Frontend runs on http://localhost:3000 and backend runs on http://localhost:5000

## Database Schema:

![Screen Shot 2022-10-31 at 6 35 23 PM](https://user-images.githubusercontent.com/110904967/199072502-137132b9-b120-4e63-b38a-bf71bb892b07.png)

## Frontend Architecture:

![Bulletin Board Architecture](https://user-images.githubusercontent.com/110904967/199202208-112dba15-f0a3-49a7-9f2f-826b306e8e3b.png)

## API Routes:

### GET /users

Gets all users
Response body:

```
[
    {
        id: integer,
        first_name: string,
        last_name: string,
        role: string,
        classroom_id: integer
    },
    ...
]
```

### POST /users

Create a new user
Request body:

```
{
    first_name: string,
    last_name: string,
    role: string,
    classroom_id: integer
}
```

Response body:

```
[
    {
        first_name: string,
        last_name: string,
        role: string,
        classroom_id: integer,
        id: integer
    },
    ...
]
```

### GET /classrooms

Gets all classrooms
Response body:

```
[
    {
        id: integer,
        classroom_name: string,
        assignment_title: string,
        assignment_desc: string
    },
    ...
]
```

### POST /classrooms

Create a classrooms
Request body:

```
{
    classroom_name: string,
    assignment_title: string,
    assignment_desc: string
}
```

Response body:

```
[
    {
        id: integer,
        classroom_name: string,
        assignment_title: string,
        assignment_desc: string
    },
    ...
]
```

### PUT /classrooms/:id

Change the classroom assignment
Request body:

```
{
    id: integer,
    assignment_title: string,
    assignment_desc: string
}
```

Response body:

```
[
    {
        id: integer,
        classroom_name: string,
        assignment_title: string,
        assignment_desc: string
    },
    ...
]
```

### GET /student-projects

Gets all student projects
Response body:

```
[
    {
        id: integer,
        user_id: integer,
        title: string,
        description: string,
        image_url: string,
        project_url: string,
        classroom_id: integer
    },
    ...
]
```

### PUT /student-projects/:id

Change the classroom assignment
Request body:

```
{
    id: integer,
    description: string,
    image_url: string,
    project_url: string,
    title: string,
    classroom_id: integer,
    user_id: integer
}
```

Response body:

```
[
    {
        id: integer,
        classroom_name: string,
        assignment_title: string,
        assignment_desc: string
    },
    ...
]
```

### POST /student-projects

Create a new blank project
Request body:

```
{
    classroom_id: integer,
    description: string,
    image_url: string,
    project_url: string,
    title: string,
    user_id: integer
}
```

Response body:

```
[
    {
        id: integer,
        classroom_id: integer,
        description: string,
        image_url: string,
        project_url: string,
        title: string,
        user_id: integer
    },
    ...
]
```

## Feature Extension Ideas

- Admin permissions for teacher for the entire site
- Teacher approval required before a student can post their work
- Button for teacher to publish new assignment/go live
- Student logins to make sure students can only update their own page
- Embed project file instead of a link that opens the project in a new page
- Reset button for teacher to clear out all projects in order to start accepting new projects
- Teacher can customize classroom page design to match project topic
- Comment feature where students can leave each other comments on their project pages
- Students can customize aspects of their personal page, such as background, colors, or font
- Anonymous voting system to choose a feature project to display in a special section on the classroom page
- Import student list from a csv file to easily populate student pages at initial set-up
- Navigation allowing users to go from one student project to another without returning to the classroom page
- Teacher-activated notification feature to send an email alert to students to upload their projects

_This is a student project that was created at [CodeOp](http://codeop.tech), a full stack development bootcamp in Barcelona._
