/*
Assessment Requirements
1. Create a variable that can hold a number of NFT's. What type of variable might this be?
2. Create an object inside your mintNFT function that will hold the metadata for your NFTs. 
   The metadata values will be passed to the function as parameters. When the NFT is ready, 
   you will store it in the variable you created in step 1
3. Your listNFTs() function will print all of your NFTs metadata to the console (i.e. console.log("Name: " + someNFT.name))
4. For good measure, getTotalSupply() should return the number of NFT's you have created
*/

// create a variable to hold your NFT's
let count = [];

// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.
function mintNFT (name1, eyeColor1, shirtType1, bling1) {
    const NFT = {
        name: name1,
        eyeColor: eyeColor1,
        shirtType: shirtType1,
        bling: bling1
    };
    count.push(NFT);
}

// create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()
function listNFTs () {
    let i = 0;
    while (i < count.length)
    {
        console.log("\nNFT ID: \t\t" + (i +1) +
                    "\nName:\t\t\t  " + count[i].name +
                    "\nEye Color:\t" + count[i].eyeColor +
                    "\nShirt Type: " + count[i].shirtType +
                    "\nBling:\t\t  " + count[i].bling);
        i++;
    }
}

// print the total number of NFTs we have minted to the console
function getTotalSupply() {
    console.log("NFT count: \t\t" + count.length);
}

// call your functions below this line
mintNFT ("Funky Monkey", "Brown", "Black-striped", "Multiple Gold chains");
mintNFT ("Hunky Monkey", "Black", "White", "Black-framed spectacles");
mintNFT ("Grumpy Monkey", "Blue", "Pit-green", "Silver chain");
mintNFT ("Angry Monkey", "Red", "Maroon", "None");

listNFTs();
getTotalSupply();
