import { useEffect, useState } from 'react';

function App() {
	const [account, setAccount] = useState('jjj')
	const [password, setPassword] = useState('')


	useEffect(() => {
		console.log("hi")
	}, [])

	return (
		<>
			<label
				>account :
				<input
					value={account}
					onChange={(e) => {
						console.log(e.target.value)
						setAccount(e.target.value)
					}}
				/>
			</label>
			{/* <label
				>password :
				<input
					disabled={account.length < 8}
					value={password}
					onChange={(e) => {
						setPassword(e.target.value)
					}}
				/>
			</label>

			<button
				onClick={() => {
					if (account.length < 8) {
						alert("account is not available.")
						return
					}
					if (password.length < 8) {
						alert("password is not available.")
						return
					}
					alert("Login is successful.")
				}}
			>
				登入
			</button> */}
		</>
	);
}

export default App;
