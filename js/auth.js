// set the variables
const params = new URLSearchParams(window.location.search);
const email = params.get('email');
const usr = params.get('username');
const passw = params.get('password');


// send rekvests
async function sendData() {
    const request = new Request("jpman url tady", {
        method: "POST",
        body: JSON.stringify({ 
            username: username,
            password: passw,
            email: email
         }),
      });
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`faklo se to: ${response.status}`);
      }
  
      const json = await response.json();
      console.log("lesgo:", json);
    } catch (error) {
      console.error("njn faklo se to:", error.message);
    }
  }
  


// jpmane klidne ten kod celej predelej ja vim ze asi nedava smysl