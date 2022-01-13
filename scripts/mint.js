const MyGallery = artifacts.require("MyGallery")
const to = "0xa641FBBC5bcD92e3B577899700e2D8F70D372C1d"

module.exports = async callback => {
    const gallery = await MyGallery.deployed()
    await gallery.mint(to, 100, "DIAMOND", "https://ipfs.cycan.network/ipfs/QmTfX9vcqRKb4RLMRJRxbucpAdvLTDp8wFHekpEFBzdS1s")
    await gallery.mint(to, 10000, "GOLD", "https://ipfs.cycan.network/ipfs/QmRDkxHRWjYXwj15u8epzifH4VmAubbzn6jgzRaz3AAJsq")
    await gallery.mint(to, 1000000, "SILVER", "https://ipfs.cycan.network/ipfs/QmbVTQsrddtZaL9JrVmSyBNtNdxpbpnXxsQ8ipY5aQ4LK7")
    await gallery.mint(to, 100000000, "COPPER", "https://ipfs.cycan.network/ipfs/QmRZuM834quJqK4EbFyuEsrc8rQePqrKQzxKvhj1getzSm")
    callback(gallery)
}
