const solanaWeb3 = require('@solana/web3.js');

const connection= new solanaWeb3.Connection('http://localhost:8899')
const programId = new solanaWeb3.PublicKey('91ioD55fPfeB74z6WYGBVTC5HNwH9wj2gETo8TVmgth3')

const key = Uint8Array.from([62,45,121,99,130,106,248,178,113,228,38,158,48,114,134,249,122,102,141,146,183,152,201,208,203,16,1,223,158,219,180,215,133,201,139,4,195,188,158,72,6,48,97,254,81,39,179,182,81,86,129,165,231,101,234,234,59,54,158,247,195,88,236,66])
const signer = solanaWeb3.Keypair.fromSecretKey(key)
// connection.getBalance(signer.publicKey).then(balance => console.log(balance / solanaWeb3.LAMPORTS_PER_SOL))

const data = Buffer.from(Uint8Array.of(0))

const transaction = new solanaWeb3.Transaction().add(
    new solanaWeb3.TransactionInstruction({
        keys: [],
        programId,
        data
    })
)

solanaWeb3.sendAndConfirmTransaction(connection, transaction, [signer])
// console.log(solanaWeb3);