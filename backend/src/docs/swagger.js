import swaggerJsdoc from "swagger-jsdoc";

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Task Manager API",
      version: "1.0.0",
      description: "Scalable REST API with JWT Authentication & RBAC"
    },
    servers: [
      {
        url: "http://localhost:5000/api/v1",
        description: "Development server"
      }
    ],
    components: {
      securitySchemes: {
        bearerAuth: {
          type: "http",
          scheme: "bearer",
          bearerFormat: "JWT"
        }
      }
    },
    security: [
      {
        bearerAuth: []
      }
    ],
    paths: {
      "/auth/register": {
        post: {
          tags: ["Auth"],
          summary: "Register a new user",
          requestBody: {
            required: true,
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  required: ["name", "email", "password"],
                  properties: {
                    name: { type: "string" },
                    email: { type: "string" },
                    password: { type: "string" }
                  }
                }
              }
            }
          },
          responses: {
            201: { description: "User registered successfully" }
          }
        }
      },

      "/auth/login": {
        post: {
          tags: ["Auth"],
          summary: "Login user",
          requestBody: {
            required: true,
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  required: ["email", "password"],
                  properties: {
                    email: { type: "string" },
                    password: { type: "string" }
                  }
                }
              }
            }
          },
          responses: {
            200: { description: "JWT token returned" },
            401: { description: "Invalid credentials" }
          }
        }
      },

      "/tasks": {
        get: {
          tags: ["Tasks"],
          summary: "Get all tasks for logged-in user",
          responses: {
            200: { description: "List of tasks" }
          }
        },
        post: {
          tags: ["Tasks"],
          summary: "Create a new task",
          requestBody: {
            required: true,
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  required: ["title"],
                  properties: {
                    title: { type: "string" },
                    description: { type: "string" }
                  }
                }
              }
            }
          },
          responses: {
            201: { description: "Task created" }
          }
        }
      },

      "/tasks/{id}": {
        put: {
          tags: ["Tasks"],
          summary: "Update a task",
          parameters: [
            {
              name: "id",
              in: "path",
              required: true,
              schema: { type: "string" }
            }
          ],
          requestBody: {
            required: true,
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  properties: {
                    title: { type: "string" },
                    description: { type: "string" }
                  }
                }
              }
            }
          },
          responses: {
            200: { description: "Task updated" }
          }
        },

        delete: {
          tags: ["Tasks"],
          summary: "Delete a task",
          parameters: [
            {
              name: "id",
              in: "path",
              required: true,
              schema: { type: "string" }
            }
          ],
          responses: {
            200: { description: "Task deleted" }
          }
        }
      }
    }
  },
  apis: []
};

export default swaggerJsdoc(options);
