// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Splitter {
    address[] public recipients;
    uint256[] public percentages;
    
    // Initialize contract with empty arrays
    constructor() {}

    receive() external payable {
        distribute();
    }

    function distribute() public {
        require(address(this).balance > 0, "No ether to distribute");
        require(recipients.length > 0, "Recipients are not set");
        require(recipients.length == percentages.length, "Recipients and percentages length mismatch");

        for (uint256 i = 0; i < recipients.length; i++) {
            uint256 amount = (address(this).balance * percentages[i]) / 100;
            payable(recipients[i]).transfer(amount);
        }
    }

    function setRecipients(address[] memory _recipients, uint256[] memory _percentages) public {
        require(_recipients.length == _percentages.length, "Arrays must be of the same length");
        require(_recipients.length > 0, "At least one recipient required");

        uint256 totalPercentage = 0;
        for (uint256 i = 0; i < _percentages.length; i++) {
            totalPercentage += _percentages[i];
        }
        require(totalPercentage == 100, "Percentages must sum up to 100");

        delete recipients;
        delete percentages;

        for (uint256 i = 0; i < _recipients.length; i++) {
            recipients.push(_recipients[i]);
            percentages.push(_percentages[i]);
        }
    }

    function getRecipients() public view returns (address[] memory) {
        return recipients;
    }

    function getPercentages() public view returns (uint256[] memory) {
        return percentages;
    }
}
