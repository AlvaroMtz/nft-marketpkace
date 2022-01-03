const deploy = async () => {
    const [deployer] = await ethers.getSigners();

    console.log(`Deploying contract with the account: ${deployer.address}`);


    const AmzNft = await ethers.getContractFactory("AmzNft")
    const deployed = await AmzNft.deploy()

    console.log(`Contract is deployed at: ${deployed.address}`)
}

deploy().then(() => process.exit(0)).catch(error => {
    console.log(error)
    process.exit(1)
})