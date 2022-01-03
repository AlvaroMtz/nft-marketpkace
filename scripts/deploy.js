const deploy = async () => {
    const [deployer] = await ethers.getSigners();

    console.log(`Deploying contract with the account: ${deployer.address}`);


    const AmzPunks = await ethers.getContractFactory("AmzPunks")
    //Deploy need three arguments, first, 
    //addres to split the pay (array), second, 
    //the equity of the spliter payment, 100 if you have one account
    // and third, the max numbers of nft
    const deployed = await AmzPunks.deploy()

    console.log(`Contract is deployed at: ${deployed.address}`)
}

deploy().then(() => process.exit(0)).catch(error => {
    console.log(error)
    process.exit(1)
})