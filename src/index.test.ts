import { describe, it } from 'node:test'
import assert from 'node:assert/strict'
import peeknik from './index'

describe('peeknik', () => {
  it('parses a valid male nik with wib calendar dob', () => {
    assert.deepEqual(peeknik('3327081203970040'), {
      valid: true,
      province: 'JAWA TENGAH',
      region: 'KAB. PEMALANG',
      district: 'PEMALANG',
      gender: 'M',
      dob: '1997-03-12',
      unique: '0040',
    })
  })

  it('accepts numeric nik input', () => {
    const result = peeknik(3327081203970040)

    assert.equal(result.valid, true)
    assert.equal(result.dob, '1997-03-12')
  })

  it('parses female nik by subtracting 40 from the day segment', () => {
    assert.deepEqual(peeknik('3327085203970040'), {
      valid: true,
      province: 'JAWA TENGAH',
      region: 'KAB. PEMALANG',
      district: 'PEMALANG',
      gender: 'F',
      dob: '1997-03-12',
      unique: '0040',
    })
  })

  it('maps two-digit year suffix to 20xx when suffix is at or below current year', () => {
    const result = peeknik('3327081203050040')

    assert.equal(result.valid, true)
    assert.match(result.dob!, /^20\d{2}-03-12$/)
  })

  it('maps two-digit year suffix to 19xx when suffix is above current year', () => {
    const result = peeknik('3327081203970040')

    assert.equal(result.valid, true)
    assert.equal(result.dob, '1997-03-12')
  })

  it('returns invalid result for wrong length', () => {
    assert.deepEqual(peeknik('123'), {
      valid: false,
      province: null,
      region: null,
      district: null,
      gender: null,
      dob: null,
      unique: null,
    })
  })

  it('returns invalid result for unknown region codes', () => {
    assert.deepEqual(peeknik('0000000000000000'), {
      valid: false,
      province: null,
      region: null,
      district: null,
      gender: null,
      dob: null,
      unique: null,
    })
  })
})
