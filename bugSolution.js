```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Correct way to update state: use the setter function
    setCount(prevCount => prevCount + 1);
  }, []);

  return <div>Count: {count}</div>;
}
```