# CryptoFlow

### Our Mission

Cryptoflow is a cutting-edge blockchain startup focused on developing decentralized applications (DApps) for the NFT ecosystem. Our primary offering is an NFT staking platform that allows users to stake their NFTs and earn rewards.

### Our Motto

At Cryptoflow, we believe that everyone should have the freedom to earn, hold, spend, share, and stake their NFTs - no matter who you are or where you come from.

## Features

## The Digital Asset platform offers the following key features:

1. Public Mint NFT Page

- A user-friendly interface that allows the general public to mint new NFTs. This page is designed to be intuitive and accessible, enabling users of all experience levels to easily create and mint their own NFTs.

2. Create Collection Page

- This dedicated page allows users to create new NFT collections. Users can define the characteristics and parameters of their collections, providing a personalized touch to their digital assets. Note: This page is currently disabled in the production environment to ensure stability and security during the initial rollout phase.

3. My Collections Page

- A personalized dashboard where users can view all the NFT collections they have created under the current Move module (smart contract). This page provides a comprehensive overview of the user's collections, enabling easy management and monitoring. Note: Similar to the Create Collection Page, this feature is also disabled in the production environment to ensure optimal performance and security.

### What tools the uses?

- React framework
- Vite development tool
- shadcn/ui + tailwind for styling
- Aptos TS SDK
- Aptos Wallet Adapter
- Node based Move commands

### What Move commands are available?

The tool utilizes [aptos-cli npm package](https://github.com/aptos-labs/aptos-cli) that lets us run Aptos CLI in a Node environment.

Some commands are built-in the template and can be ran as a npm script, for example:

- `npm run move:init` - a command to initialize an account to publish the Move contract and to configure the development environment
- `npm run move:publish` - a command to publish the Move contract
- `npm run move:test` - a command to run Move unit tests
- `npm run move:compile` - a command to compile the Move contract

For all other available CLI commands, can run `npx aptos` and see a list of all available commands.

## Getting Started

Follow these steps to set up project for development or running locally.

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/your-username/nft-minting-dapp.git
   cd <repository-directory>
   ```

2. **Initialize the Project**

   _Run the following command to install node modules:_

   ```bash
   npm install
   ```

3. **Start the Server**

_Run the following command to start the server:_

```bash
   npm run dev
```

## Contributing

Contributions are always welcome!

See `contributing.md` for ways to get started.

Please adhere to this project's `Code_of_Conduct`.

## Feedback

If you have any feedback, please reach out to us at nishantgupta1965@gmail.com

## License

[MIT](https://choosealicense.com/licenses/mit/)
