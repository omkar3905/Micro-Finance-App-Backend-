
# Micro Finance App

Welcome to the Micro Finance App GitHub repository! This project is designed to streamline the loan application and management process for various types of loans including Car, Bike, Gold, and Property loans. Below you will find all the information needed to understand, contribute to, and utilize the Micro Finance App.


## Table of Contents

1. Introduction

2. User Roles and Functionalities

3. Database Structure

4. API Endpoints

5. Modules, Packages, Software, and Hardware Used

6. Working

7. Deployment and Launch

8. Recommendations and Future Enhancements

9. Appendices

10. Conclusion
## Introduction

The Micro Finance App is designed to streamline the loan application, approval, and repayment processes. It targets four main user roles: Admin, Branch Manager, Sales Executive, and User, each playing a pivotal role in the app's operations.
## User Roles and Functionalities

➤ Admin

 • Controls the app.

 • Manages user roles.

 • Sets loan rates.

 • Monitors app activities.

➤ Branch Manager

 • Approves/rejects loan applications.

 • Manages Sales Executives.

 • Acts as a backup Sales Executive.

➤ Sales Executive

 • Submits loan applications.

 • Oversees document uploads.

 • Monitors loan repayments.

➤ User

 • Registers and applies for loans.

 • Uploads required documents.

 • Makes monthly loan payments.
## Database Structure

➤ Users Table

 • UserID: Unique identifier for each user.

 • Username: User's login identifier.

 • Password: Securely stored user password.

 • UserType: Defines the role of the user (Admin, Manager, Sales Executive, User).

 • Email: User's email address.

➤ Loans Table

 • LoanID: Unique identifier for each loan.

 • UserID: References the Users table to associate loans with users.

 • LoanType: Type of loan (Car, Bike, Gold, Property).

 • LoanAmount: Total loan amount.

 • InterestRate: Interest rate for the loan.

 • LoanStatus: Status of the loan (Pending, Approved, Rejected).

 • Duration: Duration of the loan.

 • StartDate, EndDate: Timeframe for the loan.

➤ Documents Table

 • DocumentID: Unique identifier for each document.

 • UserID: References the Users table to link documents with users.

 • DocumentType: Type of document (RCBook, Insurance, EC, PropertyTax, EBBill).

 • DocumentFile: Path to the stored document file.

 • UploadDate: Date when the document was uploaded.

➤ LoanPayments Table

 • PaymentID: Unique identifier for each payment.

 • LoanID: References the Loans table to associate payments with loans.

 • PaymentDate: Date of the payment.

 • AmountPaid: Amount paid for the loan.

 • PaymentMethod: Method used for payment.

➤ Admins, Managers, SalesExecutives Tables

 • These tables represent different user roles (Admin, Manager, Sales Executive) and store login credentials and additional details for users with these specific roles.
## API Endpoints

➤ Authentication Endpoints

 • User authentication and signup functionalities.

➤ Admin Endpoints

 • Control panel access.

 • Loan rate modification.

 • User management functionalities.

➤ Manager Endpoints

 • Loan application review.

 • Approval/rejection functionalities.

➤ Sales Executive Endpoints

 • Loan application submission.

 • Document upload management.

 • Loan repayment monitoring.

➤ User Endpoints

 • Loan application.

 • Document upload.

 • Monthly payment functionalities.

➤ Loan Type-specific Endpoints

 • Specific endpoints for Car, Bike, Gold, and Property loans.

➤ Document Management Endpoints

 • Document upload functionalities.

➤ Payment Gateway Integration

 • Integration of CCAvenue and Razorpay for payment processing.
## Modules, Packages, Software, and Hardware Used

➤ Modules & Packages

 • Node.js

 • Express.js

 • MySQL

 • JWT

 • CCAvenue API

 • Razorpay API

 • Sequelize

 • Nodemon

 • Express

➤ Software

 • Visual Studio Code

 • MySQL Workbench

 • Postman

➤ Hardware

 • Server infrastructure (cloud-based or on-premise) for hosting the application.
## Working

1. Project Initiation and Planning

 • Requirement Gathering: Understand client requirements, including user roles, functionalities, loan types, and system specifications.

 • Scope Definition: Create a detailed scope document outlining features, functionalities, and deliverables.

2. Design and Architecture

 • System Design: Define the app's structure, database schema, API endpoints, and interaction flow.

 • Database Design: Plan the database schema for efficient storage and retrieval.

 • UI/UX Design: Create wireframes and mockups for user interfaces.

3. Development Phases

 • Backend Development: Establish backend infrastructure using Node.js and Express.js.

 • Database Implementation: Create and manage the database using MySQL.

 • API Development: Develop API endpoints for various user roles and functionalities.

 • User Interface Implementation: Develop responsive, user-friendly interfaces using HTML, CSS, and JavaScript frameworks like React or Angular.

4. Functionality Implementation

 • User Management: Implement user registration, authentication, and role-based access control (RBAC).

 • Loan Application and Approval Process: Develop modules for loan applications, review processes, and documentation uploads.

 • Loan Repayment Handling: Implement features for monthly loan payments and payment history tracking.

 • Document Uploads and Verification: Enable document uploads and integrate verification mechanisms.

 • Payment Gateway Integration: Integrate CCAvenue and Razorpay APIs for secure payment processing.
## Deployment and Launch

1. Server Configuration

 • Configure servers for deployment, ensuring scalability, security, and reliability.

2. Deployment Strategy

 • Deploy the application in stages or with a phased approach.

3. Post-Launch Monitoring

 • Implement monitoring systems to track application performance and user interactions.
## Recommendations and Future Enhancements

 • Improve user experience and interface design.

 • Integrate additional payment gateways.
 
 • Implement data analytics for better insights into user behaviors and loan trends.
## Appendices

1. Sample API Response Payloads

 • Examples showcasing the format and structure of responses generated by the app's API endpoints.

2. Code Snippets for Important Functionalities

 • Segments of code demonstrating key functionalities within the Micro Finance App.

3. Database Schema Diagrams

 • Visual representations outlining the structure and relationships between tables in the app's database.
## Conclusion

The Micro Finance App is a comprehensive platform that effectively manages loan applications, approvals, document uploads, and repayments. With a robust database structure, well-defined API endpoints, and integration of necessary modules and software, the app offers a seamless user experience and caters to the diverse needs of users seeking different types of loans.