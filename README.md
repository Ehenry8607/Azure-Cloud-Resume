# Azure Cloud Resume

My serverless resume website built on Azure.

**Live site:** https://ehenryresume.z13.web.core.windows.net

---

## Tech Stack

| Layer | Service |
|---|---|
| Frontend | HTML/CSS, Azure Blob Storage (static website) |
| API | Azure Functions (Node.js 22, HTTP trigger) |
| Database | Azure Cosmos DB (NoSQL, Core API) |
| Dev Tooling | Azure CLI, Azure Functions Core Tools, Fedora Linux |

---

## Architecture

Browser → Azure Blob Storage (static site) → counter.js → Azure Function → Cosmos DB

The visitor counter is powered by an HTTP-triggered Azure Function that reads and increments a count document in Cosmos DB, returning the result as JSON to update the page.

---

## Project Structure

```
Azure-Cloud-Resume/
├── frontend/
│   ├── index.html        # Resume page
│   └── counter.js        # Visitor counter fetch logic
└── api/
    └── src/functions/
        └── counter.js    # Azure Function (HTTP trigger)
```


