# Git Documentation: 🌞 SOLAR PANELS - Green Energy Tracking Application 🌍

Welcome to **SOLAR PANELS**, an application designed to help users optimize home energy consumption, solar utilization, and EV charging with smart algorithms. This documentation will guide you through the setup process for SolarPanels and show you how to host the application on your own server.

Enjoy your journey towards greener energy management with SOLAR PANELS! 🚀


## 📑 Table of Contents

1. [Project Overview](#project-overview)
2. [Getting Started](#getting-started)
   - [Prerequisites](#prerequisites)
   - [Installation](#installation)
   - [Running Locally](#running-locally)
3. [Project Organization](#project-organization)
4. [Visual Representation](#visual-representation)

## 🌟 Project Overview <a name="project-overview"></a>

**SOLAR PANELS** is a smart energy management system that allows users to track and optimize energy production and consumption from their solar panels. It also integrates with electric vehicle (EV) charging to enhance energy efficiency.


## 🚀 Getting Started <a name="getting-started"></a>

### 🔧 Prerequisites <a name="prerequisites"></a>

Ensure the following are installed on your machine:

- **Docker** - For containerized application management.
- **AWS** - For cloud deployment and resource management.
- **Kubernetes** - For container orchestration and scaling.

### 📥 Installation <a name="installation"></a>

Follow these steps to get started:

1. **Clone the repository**:

   ```bash
   git clone https://github.com/Tihinya/SolarPanels
   ```
2. Navigate to the project directory:

   ```bash
   cd SolarPanels
   ```

### 🖥️ Running Locally <a name="running-locally"></a>
To run the application locally using Docker:

1. Start the services with Docker Compose:

   ```bash
   docker compose up
   ```

## 🛠️ Creating Microservices Architecture <a name="microservices-architecture"></a>

The project follows a microservices architecture, with distinct services for the backend, frontend, and other integrations. Each service is containerized using Docker for portability and scalability.


## 🗂️ Project Organization <a name="project-organization"></a>

### Overall File Structure

Here’s an overview of the project’s structure:

```console
.
├── images                # Static assets like images and icons
├── backend               # Backend services and API logic
│   ├── ...               # Additional backend directories
├── frontend              # Frontend UI and components
│   ├── ...               # Additional frontend directories
├── README.md             # This documentation file
└── docker-compose.yaml   # Docker Compose configuration

```

## 📊 Visual Representation of SOLAR PANELS <a name="visual-representation"></a>

### Main page 
<img src="./assets/Screenshot from 2024-10-07 01-11-40.png">

---
### Login
<img src="./assets/Screenshot from 2024-10-07 01-11-59.png">

---
### Registration
<img src="./assets/Screenshot from 2024-10-07 01-12-30.png">

---
### Swagger documentation
<img src="./assets/Screenshot from 2024-10-07 01-15-07.png">

Thank you for using SOLAR PANELS! We hope this documentation was helpful. Feel free to contribute or raise issues on the GitHub repository. Let's make energy consumption smarter together! 🌱
