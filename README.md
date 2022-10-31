# Bulletin Board

## Prerequisites:

- npm
- node
- mysql

## Getting Started:

- Run npm migrate.

- To run the backend: Run npm start.

- To run the database: Type mysql into the terminal and run the following command:
  USE bulletin_board;

- To run the frontend: cd into client and run npm start.

- Frontend runs on http://localhost:3000 and backend runs on http://localhost:5000

## Database Schema:

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

_This is a student project that was created at [CodeOp](http://codeop.tech), a full stack development bootcamp in Barcelona._
