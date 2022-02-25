TO run the application follow the below steps:

1. create the file .env and set the below environment variables:
    a. API_URL (create the application on alchemy and add the url here)
    b. PRIVATE_KEY (From Metamask export your private key)
    c. PUBLIC_KEY (From Metamask export your public key)

2. npm install
3. npm start

NOte: You should have metamask installed and ploygon Mumbai testnet added

##################################################
This project is the basic NFT minter.
currently it can mint only three images. you can click on the any one button and sign the transaction.

we had manually uploaded the images and it's metadata using Pinata.
Once uploaded we  have uploaded the metadata file over IPFS.

Then we have deployed the ERC721 smart contract to ropsten network. 
Now using this smart contract you can mint the NFT's on the click of Button

########################################################

You can use deploy.js to deploy the smart contract over different networks
If you want to Name the smart contract different then you can change it in deploy.js
####################################################
