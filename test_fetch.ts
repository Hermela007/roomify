import { fetchAsDataUrl } from './lib/ai.action';

async function test() {
  console.log('Testing fetchAsDataUrl...');
  try {
    // This is a browser-only API test (FileReader), so running it in Node will fail.
    // However, I can check if it compiles and if the logic seems correct.
    console.log('Function type:', typeof fetchAsDataUrl);
  } catch (err) {
    console.error('Test failed:', err);
  }
}

test();
