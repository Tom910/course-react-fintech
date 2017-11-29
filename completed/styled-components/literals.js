function literals(config, ...dinamic) {
  console.log(config, dinamic);
}

literals`
  color: 333;
  border: ${props => 321};
  backgraund: ${props => 321};
  kk: ${321}
`;
