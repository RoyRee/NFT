
import React, {useState} from 'react'
import {ethers} from 'ethers'
import AbiMyNFT from '../MyNFT.json';

const Mint = () => {
	let contractAddress = '0x0de665a3F29B431c9Cc1F7E190e4D87102494048';
	//                     0x0de665a3F29B431c9Cc1F7E190e4D87102494048 
	//0x0de665a3F29B431c9Cc1F7E190e4D87102494048
	const [errorMessage, setErrorMessage] = useState(null);
	const [defaultAccount, setDefaultAccount] = useState(null);
	const [connButtonText, setConnButtonText] = useState('Connect Wallet');

	const [provider, setProvider] = useState(null);
	const [signer, setSigner] = useState(null);
	const [contract, setContract] = useState(null);

	const connectWalletHandler = () => {
		if (window.ethereum && window.ethereum.isMetaMask) {

			window.ethereum.request({ method: 'eth_requestAccounts'})
			.then(result => {
				accountChangedHandler(result[0]);
				setConnButtonText('Wallet Connected');
			})
			.catch(error => {
				setErrorMessage(error.message);
			
			});

		} else {
			console.log('Need to install MetaMask');
			setErrorMessage('Please install MetaMask browser extension to interact');
		}
	}

	const accountChangedHandler = (newAccount) => {
		setDefaultAccount(newAccount);
		updateEthers();
	}

	const chainChangedHandler = () => {
		window.location.reload();
	}


	window.ethereum.on('accountsChanged', accountChangedHandler);

	window.ethereum.on('chainChanged', chainChangedHandler);

	const updateEthers = () => {
		let tempProvider = new ethers.providers.Web3Provider(window.ethereum);
		setProvider(tempProvider);

		let tempSigner = tempProvider.getSigner();
		setSigner(tempSigner);
		console.log(AbiMyNFT.abi);

		let tempContract = new ethers.Contract(contractAddress, AbiMyNFT.abi, tempSigner);
		 setContract(tempContract);	
	}

	const setHandler = async (url) => {		
		let  Pubaddress = await signer.getAddress();
		await contract.mintNFT(Pubaddress,url);
		//console.log("Done");
		

	}
	
	return (
		<div>
		<h4> {"Connect to wallet"} </h4>
			<button type="button" onClick={connectWalletHandler} className="btn btn-primary" >{connButtonText}</button>
			<div>
				
			</div>
			<div className="d-grid gap-2">
			<h3>Address: {defaultAccount}</h3>
			<button type="button" onClick={()=>setHandler("https://gateway.pinata.cloud/ipfs/QmTef8WRgJjJW1kwkU3YXcpGQi74bzShz3ewhDLaMCZLKn")} className="btn btn-primary">Zoro</button>
        	<button type="button" onClick = {()=>setHandler("https://gateway.pinata.cloud/ipfs/QmW3WHCHBtHKF1JHXMyhFRLSKk4Jhgkg12GMLq96B86Lvz")}className="btn btn-primary">Chopper</button>
        	<button type="button"  onClick = {()=>setHandler("https://gateway.pinata.cloud/ipfs/QmWVB89JBy91zchbYQSWAa1yY7mcqfPy6vQ9Ehz7fACypu")} className="btn btn-primary">Law</button>
	
			</div>

			{errorMessage}
		</div>
	);
}

export default Mint;