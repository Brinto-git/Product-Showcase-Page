document.addEventListener('DOMContentLoaded', function() {
    
    // Hero Section-এর CTA বাটনটি নির্বাচন করুন
    const ctaButton = document.querySelector('.cta-button'); 

    // ২. ইভেন্ট লিসেনার যোগ করুন
    if (ctaButton) {
        // যখন বাটনটিতে 'click' ইভেন্ট ঘটবে, তখন ফাংশনটি চলবে
        ctaButton.addEventListener('click', function(event) {
            
            // ডিফল্ট আচরণ বন্ধ করা (যেমন: লিংকে ক্লিক করলে অন্য পেজে যাওয়া)
            event.preventDefault(); 
            
            console.log("বাটনে ক্লিক করা হয়েছে! ফাংশন চলছে...");
            
            // ✅ টাস্ক: বাটনটিতে ক্লিক করা হলে তার টেক্সট পরিবর্তন করুন
            ctaButton.textContent = "অফার লোড হচ্ছে..."; 
            ctaButton.style.backgroundColor = "blue";
        });
    }


    // আমাদের প্রোডাক্টের ফিচার তালিকা (Array)
const productFeatures = ["5G Connectivity", "OLED Display", "108MP Camera", "Long Battery Life"];

// আমরা প্রতিটি ফিচারের উপর লুপ চালাব
console.log("--- সমস্ত ফিচার প্রদর্শন ---");
for (let i = 0; i < productFeatures.length; i++) {
    // i হলো ইনডেক্স (0, 1, 2, 3)
    console.log(`ফিচার ${i + 1}: ${productFeatures[i]}`);
}


// একটি প্রোডাক্ট অবজেক্ট তৈরি করা হলো
const productDetails = {
    name: "Gadget X Pro",        // String
    model: "GX-9000",            // String
    launchYear: 2025,            // Number
    isNewRelease: true,          // Boolean
    priceUSD: 1200,              // Number
    colors: ["Black", "Silver", "Midnight Blue"], // Array
    
    // অবজেক্টের ভেতরে ফাংশন (Method)
    displayInfo() {
        console.log(`Product: ${this.name} (${this.model})`);
    }
};

// অবজেক্টের মান অ্যাক্সেস করা (Dot Notation)
console.log("প্রোডাক্টের মডেল:", productDetails.model); 
console.log("রঙের তালিকা:", productDetails.colors); 

// অবজেক্টের ফাংশন কল করা
productDetails.displayInfo();

console.log("---");

// async ফাংশন তৈরি করা হলো
async function fetchUserData() {
    try {
        console.log("API থেকে ডেটা আনা হচ্ছে...");
        
        // fetch ব্যবহার করে ডেটা আনতে অপেক্ষা করা (await)
        const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
        
        // উত্তরটিকে JSON ফরম্যাট থেকে জাভাস্ক্রিপ্ট অবজেক্টে রূপান্তর করা
        const userData = await response.json(); 
        
        console.log("ব্যবহারকারীর নাম:", userData.name); 
        console.log("ব্যবহারকারীর ইমেইল:", userData.email);

    } catch (error) {
        // যদি কোনো ত্রুটি হয় (যেমন: ইন্টারনেট সংযোগ না থাকা)
        console.error("ডেটা আনার সময় ত্রুটি:", error);
    }
}

// ফাংশনটি কল করা
fetchUserData();

});