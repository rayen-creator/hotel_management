# Hotel management system
<div id="top" align="center">
 
  

<h3 align="center">Hotel Management System Microservices</h3>
  
<p align="center">
    <a href="#-about-the-project">About The Project</a> •
    <a href="#-project-technical-architecture">Project Architecture</a> •
    <a href="#-built-with">Built With</a> •
    <a href="#-usage">Usage</a> •
  </p>
 </div>
 </div>
 





<!-- ABOUT THE PROJECT -->
## 📃 About The Project


 ### 📜 Project Main features
Our backend is powered by 7 microservices, all of which happen to be written in java using Spring Boot and nestjs.
<br> 

 * **Customer Review Service** :allows customers to leave reviews and ratings for the hotel .
 * **Auxiliary Services Service**: 
 * **Parking Service**: 
 * **inventory Service**: 
 * **Reservation Service**: 
 * **Staff Management Service**:
 * **Authentification  Service**:  authentication service handles user authentication and authorization, securing access to your microservices and client-side application.


### 📐 Project Technical Architecture 
Our sample microservices-based system consists of the following modules:
- **client side** : project built using angular 15 .
- **gateway-service** : a module for running Spring Boot application that acts as a proxy/gateway in our architecture.
- **eureka_server** : a module thats Spring Cloud Eureka as an embedded discovery server.
- **ms_customer_Review** : a module allows customers to leave reviews and ratings for the hotel. It handles the storage, retrieval, and management of customer reviews .
- **ms_auxiliary_Services**: a module is intended for providing auxiliary services to customers. The description for this service is currently missing, but it likely handles functions related to additional hotel services such as room service, concierge, or other amenities.
- **ms_parking**:  a module is responsible for managing parking services at the hotel. It may include functionalities like parking reservations, tracking available parking spots, and handling payment for parking services.
- **ms_inventory**: a module likely deals with managing the inventory of the hotel, including rooms, facilities, and other assets. It could be used for checking room availability and managing room bookings.
- **ms_reservation**: a module manages hotel reservations. It handles the creation, modification, and cancellation of reservations made by customers through the client-side application.
- **ms_staff**: a module that responsible for staff management within the hotel. It may include functionalities for managing employee schedules, payroll, and other HR-related tasks.


The following picture illustrates the architecture described above.

![H2 (1)](https://github.com/SarraTounsi/MicroservicesProject/assets/57809239/2d041eb4-beed-4f03-9724-a8e383a3b318)



### 🚀 Built With

You may find below the list of the frameworks/libraries that we used to build this demo project :
<br/>

 <div align="center">
	
   <a href="https://spring.io/projects/spring-boot">
   <img src="https://github.com/devicons/devicon/blob/master/icons/spring/spring-original-wordmark.svg" title="Spring" alt="Srping" width="150" height="150"/>
  </a>
   <a href="https://www.docker.com">
   <img src="https://github.com/devicons/devicon/blob/master/icons/docker/docker-original-wordmark.svg" title="Docker" alt="Docker" width="150" height="150"/>
   </a>
  
   <a href="https://www.mongodb.com/">
    <img src="https://github.com/devicons/devicon/blob/master/icons/mongodb/mongodb-original-wordmark.svg" title="MongoDB" alt="MongoDB" width="150" height="150"/>
   </a>
  
   <a href="https://www.mysql.com/fr">
   <img src="https://github.com/devicons/devicon/blob/master/icons/mysql/mysql-original-wordmark.svg" title="MySQL" alt="MySQL" width="150" height="150"/>
   </a>
   <br>
     <a href="https://nodejs.org/en/">
   <img src="https://github.com/devicons/devicon/blob/master/icons/nodejs/nodejs-original-wordmark.svg" title="NodeJS" alt="NodeJS" width="150" height="150"/>
   </a>
   <img src="https://github.com/devicons/devicon/blob/master/icons/nestjs/nestjs-plain-wordmark.svg" title="MySQL" alt="nestjs" width="150" height="150"/>
      <img src="https://github.com/devicons/devicon/blob/master/icons/postgresql/postgresql-original-wordmark.svg"  alt="postgresql" width="150" height="150"/>

  </div>



<!-- GETTING STARTED -->
## ✨ Getting Started
To get a local copy up and running follow these simple example steps.

### 🚧 Prerequisites

You may find below the list of things you need to use this project :
* You need to have Maven, JDK8+.
* You will need to install docker in order to use the `docker-compose`.

### 🛠 Installation

_In order to install the app you need to follow the instructions below :_

1. Clone the repo
   ```sh
   git clone https://github.com/SarraTounsi/MicroservicesProject
   ```



<!-- USAGE EXAMPLES -->
## ⚡ Usage

Use this space to show useful examples of how a project can be used. Additional screenshots, code examples and demos work well in this space. You may also link to more resources.




<p align="right">(<a href="#top">back to top</a>)</p>




Developed with 💕 by **Blade Masters**.




