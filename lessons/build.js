

// BEGIN (write your solution here)
export default function build(data) {
    const total = [];
    const entries = Object.entries(data);
    for (const [key, value] of entries) {
      const result = `${key}=${value}`;
      total.push(result);
    }
    const sorted = total.sort()
    return sorted.join('&')
  }
  // END