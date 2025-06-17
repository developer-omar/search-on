import SearchEngines from "../pages/SearchEngines.vue";

export default {
  badge: 'Badge',
  open: 'Open',
  close: 'Close',
  dismiss: 'Dismiss',
  confirmEdit: {
    ok: 'OK',
    cancel: 'Cancel'
  },
  dataIterator: {
    noResultsText: 'No matching records found',
    loadingText: 'Loading items...'
  },
  dataTable: {
    itemsPerPageText: 'Rows per page:',
    ariaLabel: {
      sortDescending: 'Sorted descending.',
      sortAscending: 'Sorted ascending.',
      sortNone: 'Not sorted.',
      activateNone: 'Activate to remove sorting.',
      activateDescending: 'Activate to sort descending.',
      activateAscending: 'Activate to sort ascending.'
    },
    sortBy: 'Sort by'
  },
  dataFooter: {
    itemsPerPageText: 'Items per page:',
    itemsPerPageAll: 'All',
    nextPage: 'Next page',
    prevPage: 'Previous page',
    firstPage: 'First page',
    lastPage: 'Last page',
    pageText: '{0}-{1} of {2}'
  },
  dateRangeInput: {
    divider: 'to'
  },
  datePicker: {
    itemsSelected: '{0} selected',
    range: {
      title: 'Select dates',
      header: 'Enter dates'
    },
    title: 'Select date',
    header: 'Enter date',
    input: {
      placeholder: 'Enter date'
    }
  },
  noDataText: 'No data available',
  carousel: {
    prev: 'Previous visual',
    next: 'Next visual',
    ariaLabel: {
      delimiter: 'Carousel slide {0} of {1}'
    }
  },
  calendar: {
    moreEvents: '{0} more',
    today: 'Today'
  },
  input: {
    clear: 'Clear {0}',
    prependAction: '{0} prepended action',
    appendAction: '{0} appended action',
    otp: 'Please enter OTP character {0}'
  },
  fileInput: {
    counter: '{0} files',
    counterSize: '{0} files ({1} in total)'
  },
  timePicker: {
    am: 'AM',
    pm: 'PM',
    title: 'Select Time'
  },
  pagination: {
    ariaLabel: {
      root: 'Pagination Navigation',
      next: 'Next page',
      previous: 'Previous page',
      page: 'Go to page {0}',
      currentPage: 'Page {0}, Current page',
      first: 'First page',
      last: 'Last page'
    }
  },
  stepper: {
    next: 'Next',
    prev: 'Previous'
  },
  rating: {
    ariaLabel: {
      item: 'Rating {0} of {1}'
    }
  },
  loading: 'Loading...',
  infiniteScroll: {
    loadMore: 'Load more',
    empty: 'No more'
  },
  popup: {
    placeholder: 'Search {0}'
  },
  optionsPage: {
    menu: {
      optionsLink: 'Options',
      searchEnginesLink: 'Search Engines',
      donateLink: 'Donate'
    },
    optionsSection: {
      theme: 'Theme',
      lightTheme: 'Light',
      darkTheme: 'Dark',
      language: "Language",
      englishLanguage: 'English',
      spanishLanguage: 'Spanish',
      saveOptions: 'Save'
    },
    searchEnginesSection: {
      newSearchEngine: 'New Search Engine',
      import: 'Import',
      export: 'Export',
      icon: 'Icon',
      name: 'Name',
      nickname: 'Nickname',
      edit: 'Edit',
      delete: 'Delete',
      select: 'Select',
      form: {
        note: 'Note: Icon name is optional, but if you want to show an icon you can select the name in ',
        name: 'Name',
        nameHint: 'Search engine\'s name',
        iconName: 'Icon Name',
        iconNameHint: 'Icon\'s name',
        nickname: 'Nickname',
        nicknameHint: 'A nickname consisting of one to three characters',
        url: 'Url',
        urlHint: 'A complete URL starting with https or http and containing %s somewhere in the URL',
        select: 'Select Search Engine',
        dialogMessage: 'Are you sure about deleting the search engine?',
        yesButton: 'Yes, delete it',
        cancelButton: 'Cancel',
        saveData: 'Save'
      },
      formRules: {
        requiredName: 'Name is required.',
        requiredNickname: 'Nickname is required.',
        validNickname: "Nickname is already taken.",
        requiredUrl: 'Url is required.',
        validUrl: 'Url must be valid',
        requiredUrlPart: 'A valid url must include %s'
      }
    }
  }

};

