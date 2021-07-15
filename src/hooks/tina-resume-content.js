import projects from './projects'
import work from './work-experience'
export default {
	"content": {
		"contentfulType": "resume",
		"name": "Christina Howard",
		"contactInformation": "chtinahow@gmail.com \n github.com/chtinahow",
		"objective": `Software engineer with experience in front-end development with Javascript and React. Motivated to create and maintain applications.`,
		"content": [
				{
					"collegeName": "Rochester Institute of Technology",
					"contentfulType": "resumeCollegeBlock",
					"degrees": [
						{
							"contentfulType": "resumeDegreeBlock",
							"degree": "Bachelor of Science in Software Engineering",
							"degreeCompletion": "May 2018"
						}
					]
				},
				work['constant-contact'],
				projects['salud-consulting'], 
		]
	},
	"isErrored": false,
	"isLoaded": true
}
