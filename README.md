# RIWAYAT

A portfolio website for **RIWAYAT**, a fictional contemporary Indian restaurant.

**Where tradition finds its table.**

The restaurant, the chef, the Kolkata address and the prices are invented for this demonstration. Nothing here takes a real booking.

## Stack

- Client: React, Vite, JavaScript, Tailwind CSS, React Router, Framer Motion, Lucide
- Server: Node.js, Express, MongoDB (optional)

If `MONGODB_URI` is empty, reservation and contact requests are stored in memory and cleared when the server restarts.

## Scripts

From the project root:

```powershell
npm install
npm install --prefix client
npm install --prefix server
npm run dev
```

- Site: http://localhost:5173
- API: http://localhost:5000/api/health

```powershell
npm run build
```

Builds the client. Production API:

```powershell
npm start
```

## API

| Method | Path | Purpose |
| --- | --- | --- |
| GET | `/api/health` | Service and database status |
| POST | `/api/reservations` | Reservation request |
| POST | `/api/contact` | Contact note |

Copy `client/.env.example` and `server/.env.example` if the local env files are missing.

```env
PORT=5000
MONGODB_URI=
CLIENT_URL=http://localhost:5173
```

```env
VITE_API_URL=http://localhost:5000/api
```

## Pages

Home, Menu, Our Story, Heritage, Gallery, Reservations, Contact, and a 404 page.
