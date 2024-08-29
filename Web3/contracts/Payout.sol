// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract IncomeStream {
    address public receiver;
    address public owner;
    uint256 public amount;
    uint256 public duration;
    uint256 public startTime;
    bool public isActive = true;

    event Withdraw(address indexed receiver, uint256 amount);
    event ReceiverUpdated(address indexed oldReceiver, address indexed newReceiver);
    event DurationExtended(uint256 newDuration);
    event IncomeClaimed(address indexed receiver, uint256 amount);
    event PendingTransactionsCompleted(address indexed owner);
    event ImmediatePayout(address indexed receiver, uint256 amount);

    constructor(address _receiver, uint256 _amount, uint256 _duration) payable {
        require(msg.value >= _amount, "Insufficient Ether sent to contract");

        receiver = _receiver;
        owner = msg.sender;
        amount = _amount;
        duration = _duration;
        startTime = block.timestamp;

        if (duration == 0) {
            // If duration is 0, immediately transfer the amount to the receiver
            payable(receiver).transfer(amount);
            emit ImmediatePayout(receiver, amount);
        }
    }

    // Function to withdraw funds if the stream is completed
    function withdraw() public {
        require(isActive, "Stream is paused");
        require(block.timestamp >= startTime + duration, "Stream not completed");
        require(address(this).balance >= amount, "Insufficient balance in contract");

        payable(receiver).transfer(amount);
        emit Withdraw(receiver, amount);
    }

    // Function to update the receiver address
    function updateReceiver(address newReceiver) public {
        require(msg.sender == receiver, "Only the current receiver can update the address");
        address oldReceiver = receiver;
        receiver = newReceiver;
        emit ReceiverUpdated(oldReceiver, newReceiver);
    }

    // Function to extend the duration of the income stream
    function extendDuration(uint256 additionalDuration) public {
        require(msg.sender == receiver, "Only the receiver can extend the duration");
        require(isActive, "Stream is paused");

        duration += additionalDuration;
        emit DurationExtended(duration);
    }

    // Function to get stream details
    function getStreamDetails() public view returns (address, uint256, uint256, uint256, bool) {
        return (receiver, amount, duration, startTime, isActive);
    }

    // Function to check the amount that can be withdrawn
    function withdrawableAmount() public view returns (uint256) {
        if (block.timestamp >= startTime + duration) {
            return amount;
        } else {
            return 0;
        }
    }

    // Function to pause the stream
    function pauseStream() public {
        require(msg.sender == receiver, "Only the receiver can pause the stream");
        isActive = false;
    }

    // Function to resume the stream
    function resumeStream() public {
        require(msg.sender == receiver, "Only the receiver can resume the stream");
        isActive = true;
    }

    // Function for the receiver to claim their income
    function claimIncome() public {
        require(msg.sender == receiver, "Only the receiver can claim the income");
        require(isActive, "Stream is paused");
        require(block.timestamp >= startTime + duration, "Stream not completed");
        require(address(this).balance >= amount, "Insufficient balance in contract");

        payable(receiver).transfer(amount);
        emit IncomeClaimed(receiver, amount);
    }

    // Function for the owner to complete all pending transactions if the duration has passed
    function completePendingTransactions() public {
        require(msg.sender == owner, "Only the owner can complete pending transactions");
        require(block.timestamp >= startTime + duration, "Stream not completed");
        require(address(this).balance >= amount, "Insufficient balance in contract");

        payable(receiver).transfer(amount);
        emit PendingTransactionsCompleted(owner);
    }

    // Fallback function to accept ether
    receive() external payable {}
}
