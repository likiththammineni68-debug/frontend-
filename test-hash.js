// Test script to generate correct hashes
async function hashFingerprint(fingerprint) {
  const encoder = new TextEncoder();
  const data = encoder.encode(fingerprint);
  const hashBuffer = await crypto.subtle.digest('SHA-256', data);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
  return hashHex;
}

async function main() {
  console.log('Hash for "demo123":', await hashFingerprint('demo123'));
  console.log('Hash for "test":', await hashFingerprint('test'));
}

main().catch(console.error);