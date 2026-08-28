# piknik <sub><sup>/pik·nik/</sup></sub> _verb_

Peeknik can be read as "piknik" in Indonesian,
which means traveling somewhere outside the city to
hav fun with food and so on.

Peeknik in English can mean to peek, and NIK is
Nomor Induk Kependudukan, or National Identity Card
Number.

# Install

Install with your favorite package manager.

```bash
npm i peeknik
```

This will add the latest peeknik release as a
module to your project.

# Usage

For very easy usage, just call the function, and
we'll return an object.

```typescript
// const peeknik = require('peeknik')
import peeknik from 'peeknik'

// just a random sample!
const nik = '3327081203970040'
// you can use string or number data type

const data = peeknik(nik)
// {
//   "valid": true,
//   "province": "JAWA TENGAH",
//   "region": "KAB. PEMALANG",
//   "district": "PEMALANG",
//   "gender": "M",
//   "dob": "1997-03-12", // WIB calendar date (GMT+7)
//   "unique": "0040"
// }
```

# License

Code licensed under [Apache 2.0 License](./LICENSE).
