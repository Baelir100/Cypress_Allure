const MainPage = require('../e2e/page/main.page.js')
const ReviewPage = require('../e2e/page/review.page.js')
const DownloadPage = require('../e2e/page/download.page.js')
const ActivityPage = require('../e2e/page/activity.page.js')
const RoadmapPage = require('../e2e/page/roadmap.page.js')
const IssuesPage = require('../e2e/page/issues.page.js')
const NewsPage = require('../e2e/page/news.page.js')
const BoardsPage = require('../e2e/page/boards.page.js')
const RepositoryPage = require('../e2e/page/repository.page.js')
const SearchResultPage = require('../e2e/page/search.result.page.js')
const RegistrationPage = require('../e2e/page/registration.page.js')
const LoginPage = require('../e2e/page/login.page')

describe('Main menu', () => {
    it('should allow me to follow menu links', () => {
        const mainPage = new MainPage();
        const reviewPage = new ReviewPage();
        const downloadPage = new DownloadPage();
        const activityPage = new ActivityPage();
        const roadmapPage = new RoadmapPage();
        const issuesPage = new IssuesPage();
        const newsPage = new NewsPage();
        const boardsPage = new BoardsPage();
        const repositoryPage = new RepositoryPage();
        cy.visit('https://redmine.org/')

        mainPage.clickReviewLink()
        reviewPage.headerShouldHaveText()

        mainPage.clickDownloadLink()
        downloadPage.headerShouldHaveContain()

        mainPage.clickActivityLink()
        activityPage.headerShouldHaveText()

        mainPage.clickRoadmapLink()
        roadmapPage.headerShouldHaveText()

        mainPage.clickIssuesLink()
        issuesPage.headerShouldHaveText()

        mainPage.clickNewsLink()
        newsPage.headerShouldHaveText()

        mainPage.clickWikiLink()
        mainPage.headerShouldHaveContain()
        
        mainPage.clickBoardsLink()
        boardsPage.headerShouldHaveText()

        mainPage.clickRepositoryLink()
        repositoryPage.headerShouldHaveText()
    
  })
})

describe('Search input', () => {
    it('should allow me to enter search data', () => {
        const mainPage = new MainPage();
        const searchResultPage = new SearchResultPage();
        const searchData = '231'

        cy.visit('https://redmine.org/')

        mainPage.typeSearchInput(searchData)
        mainPage.searchInputShouldHaveValue(searchData)
        mainPage.searchInputPressEnterKey()
        searchResultPage.headerShouldHaveContain(searchData)
    
  })
})

describe('No valid registration data', () => {
    it('should allow me to see the error', () => {
        const registrationPage = new RegistrationPage();
        const mainPage = new MainPage();

        cy.visit('https://redmine.org/')

        mainPage.clickRegistrationLink()
        registrationPage.clickSubmitInput()
        registrationPage.errorFormShouldBeVisible()
    
  })
})

describe('Login with no valid data', () => {
    it('dont should allow me to login', () => {
        const mainPage = new MainPage();
        const loginPage = new LoginPage();
        const username = 'ForTest22'
        const pass = '123456qa'

        cy.visit('https://redmine.org/')

        mainPage.clickLoginLink()
        loginPage.typeNameInput(username)
        loginPage.typePasswordInput(pass)
        loginPage.clickSubmitInput()
        loginPage.errorForValidDataShouldBeVisible()

    
  })
})

describe('Not null name of board', () => {
    it('should allow me to see theme of board', () => {
        const mainPage = new MainPage();
        const boardsPage = new BoardsPage();

        cy.visit('https://redmine.org/')

        mainPage.clickBoardsLink()
        boardsPage.clickFirstItemInTable()
        boardsPage.clickFirstItemInTable()  
        boardsPage.notNullNameOfBoard()    

    
  })
})