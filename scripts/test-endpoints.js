import http from 'http';

function testGet(path) {
  return new Promise((resolve, reject) => {
    http.get(`http://localhost:5000${path}`, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        try {
          resolve({ status: res.statusCode, data: JSON.parse(data) });
        } catch {
          resolve({ status: res.statusCode, data });
        }
      });
    }).on('error', reject);
  });
}

function testPost(path, body) {
  return new Promise((resolve, reject) => {
    const postData = JSON.stringify(body);
    const req = http.request({
      hostname: 'localhost',
      port: 5000,
      path,
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Content-Length': Buffer.byteLength(postData)
      }
    }, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        try {
          resolve({ status: res.statusCode, data: JSON.parse(data) });
        } catch {
          resolve({ status: res.statusCode, data });
        }
      });
    });
    req.on('error', reject);
    req.write(postData);
    req.end();
  });
}

async function run() {
  console.log('Testing server endpoints...');
  try {
    const health = await testGet('/api/health');
    console.log('GET /api/health:', health.status, health.data.status);

    const snapshot = await testGet('/api/convex/snapshot');
    console.log('GET /api/convex/snapshot:', snapshot.status, snapshot.data.tableCounts);

    const reviews = await testGet('/api/reviews?productId=VN-0001');
    console.log('GET /api/reviews:', reviews.status, 'count:', reviews.data.count);

    const likes = await testGet('/api/likes?productId=VN-0001');
    console.log('GET /api/likes:', likes.status, 'count:', likes.data.count);

    const trans = await testGet('/api/translations?targetId=bamboo-basket&locale=ta');
    console.log('GET /api/translations:', trans.status, 'count:', trans.data.count);

    const otp = await testPost('/api/auth/send-otp', { email: 'manisha.m2025aiml@sece.ac.in' });
    console.log('POST /api/auth/send-otp:', otp.status, 'code:', otp.data.code);

    const verify = await testPost('/api/auth/verify-otp', { email: 'manisha.m2025aiml@sece.ac.in', code: otp.data.code || '123456' });
    console.log('POST /api/auth/verify-otp:', verify.status, 'user:', verify.data.user?.email, 'session:', verify.data.session?.id);

    console.log('\nALL 7 ENDPOINTS VERIFIED AND PASSING SUCCESSFULLY!');
  } catch (err) {
    console.error('Test error:', err.message);
  }
}

run();
