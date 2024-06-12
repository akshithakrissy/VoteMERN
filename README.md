# Vote Polling Application

This Vote Polling Application is built using Node.js, Express, React, and MongoDB. The application allows users to cast votes for different candidates, view vote counts, and manage voter information.

## Features

- **Vote Casting:** Users can cast votes for candidates.
- **View Vote Counts:** View the number of votes each candidate has received.
- **Manage Voter Information:** Add, update, and delete voter information.
- **Real-time Updates:** The application updates in real-time as votes are cast or voter information is modified.
- **MongoDB Integration:** Efficient and scalable data storage and management.

## Technologies Used

- **Backend:** Node.js, Express
- **Frontend:** React, React Router, axios, Bootstrap
- **Database:** MongoDB

## Getting Started

### Prerequisites

- Node.js
- npm or yarn
- MongoDB

### Installation

1. **Clone the repository:**

```bash
git clone https://github.com/yourusername/vote-polling-app.git
cd vote-polling-app
```

2. **Install dependencies:**

```bash
# For the backend
cd backend
npm install

# For the frontend
cd ../frontend
npm install
```

3. **Set up MongoDB:**
   - Ensure MongoDB is installed and running on your machine.
   - Create a `.env` file in the backend directory with the following content:
     ```
     MONGODB_URI=your_mongodb_connection_string
     ```

### Running the Application

1. **Start the backend server:**

```bash
cd backend
node server.js
```

The backend server will run on `http://localhost:5000`.

2. **Start the frontend server:**

```bash
cd frontend
npm start
```

The frontend server will run on `http://localhost:3000`.

### API Endpoints

- **GET `/Voter`**: Retrieve all voters.
- **POST `/Voter`**: Add a new vote.
- **DELETE `/delete/:i`**: Delete a voter by ID.
- **PUT `/update/:i`**: Update voter information by ID.
