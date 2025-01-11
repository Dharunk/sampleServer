const bcrypt = require('bcryptjs');
bcrypt.hash('password', 10, (err, hashedPassword) => {
  console.log('Hashed Password:', hashedPassword);
});
