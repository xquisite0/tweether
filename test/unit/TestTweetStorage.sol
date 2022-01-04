// SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.10;

import "truffle/Assert.sol";
import "truffle/DeployedAddresses.sol";
import "../../contracts/tweets/TweetStorage.sol";

contract TestTweetStorage {

    TweetStorage tweetStorage;

    constructor() {
        tweetStorage = new TweetStorage();
        tweetStorage.setControllerAddr(address(this));
    }

    function testCreateTweet() public {
        uint _userId = 1;
        uint _expectedTweetId = 1;

        Assert.equal(
            tweetStorage.createTweet(_userId, "Hello world!"),
            _expectedTweetId,
            "Should create tweet with ID 1"
        );
    }
}