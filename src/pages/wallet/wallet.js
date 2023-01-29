// import React from "react";

// export default ()=> {
//   return <div>
//    wallet page
//   </div>;
// };
// import React, { useEffect } from 'react';
// import Web3 from 'web3';

// const MetaMaskConnectPage = () => {
//   useEffect(() => {
//     // check if MetaMask is installed
//     if (typeof window.ethereum !== 'undefined') {
//       // request access to user accounts
//       window.ethereum.enable().then((accounts) => {
//         // get user's account address
//         const userAddress = accounts[0];
//         console.log(userAddress);
//         // sign a transaction
//         const web3 = new Web3(window.ethereum);
//         web3.eth.sendTransaction({
//           to: '0x...', // recipient address
//           from: userAddress,
//           value: web3.utils.toWei('1', 'ether'), // 1 ether in wei
//         });
//       }).catch(()=>{
//         console.log("User denied the connection")
//       });
//     } else {
//       console.log('MetaMask is not installed');
//     }
//   }, []);

//   return <div>Connected to metamask</div>;
// };

// export default MetaMaskConnectPage;
// import React, { useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { Link } from 'react-router-dom';
// import Web3 from 'web3';

// const MetaMaskConnectPage = () => {
//   const navigate = useNavigate();

//   useEffect(() => {
//     // check if MetaMask is installed
//     if (typeof window.ethereum !== 'undefined') {
//       // request access to user accounts
//       window.ethereum.enable().then((accounts) => {
//         // get user's account address
//         const userAddress = accounts[0];
//         console.log(userAddress);
//         // sign a transaction
//         const web3 = new Web3(window.ethereum);
//         web3.eth.sendTransaction({
//           to: '0x...', // recipient address
//           from: userAddress,
//           value: web3.utils.toWei('1', 'ether'), // 1 ether in wei
//         });
//         // redirect to the next page
//         navigate('/shop');

//       }).catch(()=>{
//         console.log("User denied the connection")
//       });
//     } else {
//       console.log('MetaMask is not installed');
//     }
//   }, [navigate]);

//   return <div>
//     <Link to="/">go to shop</Link>
//   </div>;
// };

// export default MetaMaskConnectPage;
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Web3 from 'web3';

const MetaMaskConnectPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // check if MetaMask is installed
    if (typeof window.ethereum !== 'undefined') {
        // request access to user accounts
        window.ethereum.enable().then((accounts) => {
            // redirect to the shop page
            window.location.href = '/';
        }).catch(()=>{
            console.log("User denied the connection")
        });
    } else {
        console.log('MetaMask is not installed');
    }
}, []);



  return null;
};

export default MetaMaskConnectPage;
