# 🏛️ CMZ - Government Portal & Document Management

This is the official frontend platform for the **Mé-Zóchi District Council (CMZ)**. It operates as a specialized tenant of the **Centralized Multi-Tenant Government Kernel**, providing both public-facing information and a secure administrative back-office for municipal management.

## 🔗 Live Deployment

- **Official Website:** [www.cmz.st](https://www.cmz.st/)

---

## 📸 Platform Showcase

Below are the key interfaces of the CMZ digital government portal:

|                          **1. Officer Dashboard**                          |                          **2. Certificate Preview**                          |                       **3. Public News Feed**                        |
| :------------------------------------------------------------------------: | :--------------------------------------------------------------------------: | :------------------------------------------------------------------: |
| ![Officer Dashboard](https://www.cmz.st/screenshots/screenshot_061145.png) | ![Certificate Preview](https://www.cmz.st/screenshots/screenshot_061203.png) | ![Public News](https://www.cmz.st/screenshots/screenshot_061229.png) |
|            _Administrative hub for verifying citizen requests._            |            _Live generated legal document for residency/banking._            |     _Transparency portal for council-to-citizen communication._      |

## 🚀 Key Engineering Highlights

- **Dual-Layer Architecture:** \* **Public Portal:** An institutional interface showcasing district activities, tourism, and services to citizens.
  - **Private Administrative Suite:** A secure area for government officials to manage citizens' records and document requests.
- **Automated Document Issuance:** Integrated with the Kernel's **xhtml2pdf** engine to generate dynamic, legally compliant PDF certificates (e.g., Residency, Marital Status) directly from the dashboard.
- **Multi-Tenant Data Consumption:** Leverages centralized API endpoints with strict isolation, ensuring that CMZ's governmental data remains separate from other organizations within the ecosystem.
- **State-Driven UI:** Implemented a robust status tracking system for documents (Revisto, Incorrecto), allowing real-time collaboration between administrative staff and department heads.

## 🛠️ Tech Stack

- **Framework:** React.js / Next.js
- **UI/UX:** **Bootstrap 5** (Clean, professional government-standard interface)
- **Icons & Assets:** FontAwesome / Custom SVG icons
- **Integration:** RESTful API consumption via the Multi-tenant Kernel

## ⚙️ Core Functionalities (As seen in UI)

### 1. Citizen Records Management

A centralized table view for managing all official requests, featuring:

- Real-time search by document number or name.
- Status filtering (Reviewed vs. Incorrect).
- Chronological sorting for administrative efficiency.

### 2. Legal Document Generation

Automated workflow for creating "Atestados":

- Data input for residency and bank account updates.
- Automated fee calculation (Emolumentos, Selo, etc.).
- Secure versioning via **Amazon S3** (managed by the Kernel).

---

_Developed by Edmilbe Ramos - Full-Stack Developer 📍 Norfolk, UK_
