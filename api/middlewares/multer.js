import multer from 'multer';

const uploads = multer({
	storage: multer.diskStorage({}),
	fileFilter: (req, file, cb) => {
		if (!file.mimetype.match(/gif$/i)) {
			cb(new Error('Only gifs are allowed'), false);
			return;
		}
		cb(null, true);
	}
});

export default uploads;
