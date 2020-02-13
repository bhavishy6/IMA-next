import Link from 'next/link';

const linkStyle = {
  marginRight: 15
};

const IMAHeader = () => (
  <div>
    <Link href="/">
      <a style={linkStyle}>Home</a>
    </Link>
    <Link href="/sales">
      <a style={linkStyle}>Sales</a>
    </Link>
    <Link href="/inventory">
      <a style={linkStyle}>Inventory</a>
    </Link>
  </div>
);

export default IMAHeader;
