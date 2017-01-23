window.ExpectData = window.ExpectData || {};
window.ExpectData.project = {
  tabs: [
    {
      name: "Project Summary",
      sections: [
        {
          name: "Details",
          fields: [
            {name: "Project Name"},
            {name: "Parent Project"},
            {name: "Status"},
            {name: "Project Type"}
          ]
        },
        {
          name: "Points of Contact",
          fields: [
            {name: "POC 1"},
            {name: "POC 2"},
            {name: "Owning Team"},
            {name: "Oncall Team"},
            {name: "NOC Station"},
            {name: "Mailing List"},
            {name: "Slack Channel"}
          ]
        },
        {
          name: "Business/Financial Information",
          fields: [
            {name: "Cost Center"},
            {name: "Billing Type"},
            {name: "Classification"},
          ]
        }
      ] // End sections.
    }
  ] // End tabs
};
