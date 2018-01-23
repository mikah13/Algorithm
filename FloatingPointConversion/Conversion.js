class Conversion {
  constructor(s, e, m) {
    this.s = s.trim();
    this.e = e.trim();
    this.m = m.trim();
  }
  getSign() {
    return this.s === 1;
  }

  getBias() {
    return Math.pow(2, this.e.length - 1) - 1;
  }

  firstPartBin(a) {
    return a
      .split('')
      .map((i, j) => i * Math.pow(2, a.length - j - 1))
      .reduce((x, y) => x + y);
  }

  secondPartBin(a) {
    return a
      .split('')
      .map((i, j) => i * Math.pow(2, -(j + 1)))
      .reduce((x, y) => x + y);
  }

  binToDec(a) {
    if (a.indexOf('.') === -1) {
      return this.firstPartBin(a);
    } else {
      a = a.split('.');
      a[0] = a[0] === '' ? '0' : a[0];
      a[1] = a[1] === '' ? '0' : a[1];
      return this.firstPartBin(a[0]) + this.secondPartBin(a[1]);
    }
  }

  expoToDec() {
    return this.binToDec(this.e) - this.getBias();
  }

  setRadix(a, b, c) {
    a = a.split('');
    if (c >= 0) {
      if (c > a.length) {
        for (let i = 0; i < c - a.length; i++) {
          a.push('0');
        }
        a.push('.');
      } else {
        a.splice(c, 0, '.');
      }
      a.unshift(b);
    } else {
      a.unshift(b);
      for (let i = 1; i < -c; i++) {
        a.unshift('0');
      }
      a.unshift('.');
    }
    return a.join('');
  }

  // enter 1 for all zero &enter  0 for all one
  isAll(a, b) {
    return a.split('').indexOf(b) === -1;
  }

  manToBin() {
    if (this.isAll(this.e, '0')) {
      return this.isAll(this.m, '1')? 'INFINITY':'NaN';
    } else if (this.isAll(this.e, '1')) {
      return this.binToDec(this.setRadix(this.m, '0', -this.getBias()+1));
    } else {
      return this.binToDec(this.setRadix(this.m, '1', this.expoToDec()));
    }
  }
  convert() {
    let res = this.manToBin();
    return res!=='NaN'?this.s === 1 ? res : '-' + res:res;
  }
}
