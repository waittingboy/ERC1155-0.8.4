// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
//import "https://github.com/OpenZeppelin/openzeppelin-contracts/blob/release-v4.4/contracts/token/ERC1155/ERC1155.sol";
//import "https://github.com/OpenZeppelin/openzeppelin-contracts/blob/release-v4.4/contracts/utils/Counters.sol";

contract MyGallery is ERC1155 {
    using Counters for Counters.Counter;
    Counters.Counter private _id;

    // Token info
    struct TokenInfo {
        string tokenName;
        string tokenURI;
    }

    // Mapping of tokenId to tokenInfo
    mapping(uint256 => TokenInfo) private tokenInfos;

    constructor() ERC1155("") {

    }

    /*
     * @dev Mint token
     */
    function mint(address owner, uint256 initialSupply, string memory tokenName, string memory tokenURI) public {
        _id.increment();

        uint256 newId = _id.current();
        _mint(owner, newId, initialSupply, "");
        setTokenInfo(newId, tokenName, tokenURI);
    }

    /*
     * @dev Batch mint token
     */
    function mintBatch(address owner, uint256[] memory initialSupply, string[] memory tokenName, string[] memory tokenURI) public {
        for (uint256 i = 0; i < initialSupply.length; i++) {
            _id.increment();

            uint256 newId = _id.current();
            _mint(owner, newId, initialSupply[i], "");
            setTokenInfo(newId, tokenName[i], tokenURI[i]);
        }
    }

    /*
     * @dev Set name and uri for token
     */
    function setTokenInfo(uint256 tokenId, string memory tokenName, string memory tokenURI) internal {
        TokenInfo memory tokenInfo = TokenInfo(tokenName, tokenURI);
        tokenInfos[tokenId] = tokenInfo;
    }

    /*
     * @dev Get token name by token id
     */
    function name(uint256 tokenId) public view returns (string memory)  {
        return tokenInfos[tokenId].tokenName;
    }

    /*
     * @dev Get token uri by token id
     */
    function uri(uint256 tokenId) public view virtual override returns (string memory) {
        return tokenInfos[tokenId].tokenURI;
    }
}