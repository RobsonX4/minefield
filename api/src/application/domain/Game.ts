class Game {

	config: { 
		level: string; 
		lines: number; 
		collumns: number; 
		bombs: number 
	}; 
	minefield: any[]; 
	status: string 
	startedAt: number
	finishedAt: number
	duration: number

	constructor (config) {
		this.config = config,
		this.minefield = [],
		this.status = 'PLAYING'
		this.startedAt = Date.now()
	}

	initMinefield(value) {
		this.minefield = new Array(this.config.lines).fill(value)
			.map(() => new Array(this.config.collumns).fill(value))
	}

	setField(x, y, field) {
		this.minefield[x][y] = field
	}

	setStatus (status) {
		this.status = status
		if (this.status === 'WIN' || this.status === 'LOSE') {
			this.finishedAt = Date.now()
			this.duration = this.finishedAt - this.startedAt
		}
	}

}

export default Game