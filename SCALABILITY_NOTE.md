### **Scalability & Future Roadmap**

To scale this application for production use:

- **Caching:** Implement Redis to cache frequently accessed tasks and reduce database latency.

- **Microservices:** Decouple Auth and Task modules into independent services for horizontal scaling.

- **Load Balancing:** Deploy multiple instances behind an Nginx load balancer to distribute traffic.

- **Rate Limiting:** Protect the API from brute-force attacks using express-rate-limit.

- **Containerization:** Use Docker to ensure consistent environments across development and production.
