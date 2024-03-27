# Decentralized Mail Finance Protocol

This repository contains the source code for the Decentralized Mail Finance Protocol website. The website is built using Svelte and SvelteKit, and it's styled with Tailwind CSS.

## Table of Contents
- [Abstract](#abstract)
- [Introduction](#introduction)
- [The Problem](#problem)
- [The Solution](#solution)
- [Architecture](#architecture)
- [Registration Workflow](#registration)
- [Mail Sending Workflow](#mail)
- [Use Cases](#usecase)

## Abstract
In today's digital age, where communication and finance are pivotal to both personal and professional spheres, DmailFi emerges as a groundbreaking solution, merging email services with decentralized finance (DeFi) functionalities. Utilizing the robustness of blockchain technology, specifically the Internet Computer Protocol (ICP), DmailFi offers a secure, private, and efficient platform for conducting email communication intertwined with financial transactions. This white paper delves into existing challenges within email services and DeFi platforms, unveiling the innovative technology behind DmailFi, its unique features, practical applications, and a forward-looking roadmap.

## The Problem
DmailFi addresses several critical issues plaguing traditional email services and DeFi platforms:

- **Security Vulnerabilities:** Traditional email services are susceptible to security breaches, such as Business Email Compromise (BEC), and lack native end-to-end encryption for emails at rest.
- **High Subscription Costs:** Services like Google Workspace and Outlook impose significant subscription fees, particularly burdensome for organizations with a large number of employees.
- **Email Address Generation:** There's a pressing need for generating a multitude of email addresses assignable to customers for auditing purposes, without requiring customers to forfeit their personal email addresses.
- **DeFi Integration:** DeFi platforms often present user-unfriendly interfaces and exist separately from everyday communication tools, leading to inefficiencies and heightened security risks.

## The Solution
DmailFi innovatively addresses these challenges:

- **Cryptographic Verification:** Utilizes cryptographic signatures to authenticate the origin of emails, enhancing security.
- **ICP Platform:** Leverages the low-cost infrastructure of the ICP platform for generating a vast number of email addresses.
- **Address Generation:** There's a pressing need for generating a multitude of email addresses assignable to customers for auditing purposes, without requiring customers to forfeit their personal email addresses.
- **ICP vetKD:** Employs ICP vetKD to encrypt emails in transit and at rest, ensuring superior security and privacy.

## Architecture
DmailFi's architecture is built on several key components:

- **Master Canister:** Serves as a registry linking domain names (e.g., user@example.com) to Mail Canister IDs and facilitates the creation of canisters for users.
- **Mail Canister:** Functions as the storage unit for emails and files associated with a domain name (e.g., example.com).
- **Domain Verification Service (DVS):** A Web2 API service confirming domain ownership, instructing the Master Canister to generate a Mail Canister for the domain.
- **Web3 SMTP Gateway:** A gateway facilitating the reception of emails via the Simple Mail Transfer Protocol from traditional email environments to the ICP network.
- **Frontend:** Provides a workspace for domain owners to read and manage their emails.

## Registration Workflow
DmailFi simplifies the registration process:

1. Users submit a domain name for verification via DVS.
2. Post-verification, DVS prompts the Master Canister to create a corresponding Mail Canister.
3. Upon Mail Canister creation, users can commence sending emails to other domains.

## Mail Sending Workflow
Email transmission in DmailFi operates seamlessly:

1. Sending users' private Mail Canisters consult the Master Canister to retrieve the recipient domain's Canister ID and direct emails accordingly.
2. For recipient domains not on the ICP platform, the Mail Canister employs an HTTP Outgoing call to relay the email through the Web3 SMTP Gateway to external recipients.

## Use Cases
DmailFi revolutionizes email communication and financial transactions for:

- Freelancers: Streamlining invoice issuance and payment reception directly via email.
- Businesses: Enhancing management of payments and communications.
- Regulated Industries: Health, Government and Legal Industries can send encrypted mails.
- Individuals: Facilitating money transfers as effortlessly as sending an email, ideal for bill splitting or gifting.

## Project Structure for Website Profile

- `src/routes/+page.svelte`: This is the main page of the website. It contains the introduction to the Decentralized Mail Finance Protocol and a link to the whitepaper.
- `src/routes/whitepaper/+page.svelte`: This page contains the whitepaper for the Decentralized Mail Finance Protocol. It outlines the problems that the protocol aims to solve, the solutions it provides, and its architecture.

## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

To create a production version of your app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://kit.svelte.dev/docs/adapters) for your target environment.
