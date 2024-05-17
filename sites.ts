import { ColumnType } from "./column";
export const listDefinitions = {
  lists: [
    {
      name: "Consultant",
      columns: [
        { columnName: "Title",internalName: "Title", columnType: ColumnType.Text },
        { columnName: "Modified",internalName: "Modified", columnType: ColumnType.DateTime },
        { columnName: "Created", internalName: "Created", columnType: ColumnType.DateTime },
        { columnName: "Description",internalName: "Description", columnType: ColumnType.Text },
        { columnName: "Name", internalName: "Name",columnType: ColumnType.Text },


        {
            columnName: "Industry",
            internalName: "Industry",
            columnType: ColumnType.Choice,
            choices: ["Construction", "IT", "Health"],
          }, 


        { columnName: "Phone", internalName: "Phone", columnType: ColumnType.Text },
        { columnName: "Email", internalName: "Email", columnType: ColumnType.Text },
        { columnName: "IsDeleted", internalName: "IsDeleted", columnType: ColumnType.Boolean },
        { columnName: "Project", internalName: "Project", columnType: ColumnType.Lookup },
        { columnName: "Created By", internalName: "Author", columnType: ColumnType.User },
        { columnName: "Modified By", internalName: "Editor", columnType: ColumnType.User },

      ],
    },

    {
      name: "Milestone",
      columns: [
        { columnName: "Title",internalName: "Title", columnType: ColumnType.Text },
        { columnName: "Modified Date", internalName: "Modified",columnType: ColumnType.DateTime },
        { columnName: "Created Date", internalName: "Created", columnType: ColumnType.DateTime },
        { columnName: "Actual_End_Date", internalName: "Actual_End_Date", columnType: ColumnType.DateTime },
        { columnName: "Actual_Start_Date", internalName: "Actual_Start_Date", columnType: ColumnType.DateTime },
        { columnName: "Description", internalName: "Description", columnType: ColumnType.Text },
        { columnName: "Name", internalName: "Name", columnType: ColumnType.Text },
        { columnName: "Planned_End_Date",internalName: "Planned_End_Date", columnType: ColumnType.DateTime },
        { columnName: "Planned_Start_Date", internalName: "Planned_Start_Date", columnType: ColumnType.DateTime },

        {
            columnName: "Status",
            internalName: "Status",
            columnType: ColumnType.Choice,
            choices: ["New", "On Hold", "In Progress","Cancelled","In Review","Completed"],
        },

        { columnName: "IsDeleted", internalName: "IsDeleted",columnType: ColumnType.Boolean },
        { columnName: "EstimatePercentage", internalName: "EstimatePercentage", columnType: ColumnType.Number },
        { columnName: "PercentageOfCompiletion", internalName: "PercentageOfCompiletion", columnType: ColumnType.Number },

        {   columnName: "Project",
            intenalName:'Project',
            columnType: ColumnType.Lookup ,
            
            lookupFieldName: "Project",
            lookupListName: "Name",
          },


        { columnName: "Project_Name", intenalName:'Project_Name', columnType: ColumnType.Text },
        { columnName: "Language", intenalName:'Language', columnType: ColumnType.Text },
        { columnName: "Completion_Date", intenalName:'Completion_Date',columnType: ColumnType.DateTime },
        { columnName: "DelayNotified", intenalName:'DelayNotified', columnType: ColumnType.Boolean },
        { columnName: "Created By", intenalName:'Author', columnType: ColumnType.User },
        { columnName: "Modified By",intenalName:'Editor', columnType: ColumnType.User },

      ],
    },
    {
        name: "MilestoneTemplate",
        columns: [
          { columnName: "Title", intenalName:'Title',columnType: ColumnType.Text },
          { columnName: "MilestoneName", intenalName:'MilestoneName', columnType: ColumnType.Text },
          { columnName: "EstimatePercentage", intenalName:'EstimatePercentage', columnType: ColumnType.Number },
          { columnName: "EstimateDuration", intenalName:'EstimateDuration', columnType: ColumnType.Number },

          { columnName: "Template", 
             internalName:'Template',
            columnType: ColumnType.Lookup ,
            lookupFieldName: "Template",
            lookupListName: "ID",
          },

          { 
            columnName: "Template:TemplateName", 
            internalName:'Template_x003a_TemplateName',
            columnType: ColumnType.Lookup,
            lookupFieldName: "Template",
            lookupListName: "TemplateName",
          },

          { columnName: "Modified",  internalName:'Modified', columnType: ColumnType.DateTime },
          { columnName: "Created", internalName:'Created', columnType: ColumnType.DateTime },
          { columnName: "Created By",  internalName:'Author', columnType: ColumnType.User },
          { columnName: "Modified By", internalName:'Editor', columnType: ColumnType.User },

  
        ],
      },

        {
        name: "PageResource",
        columns: [
            { columnName: "Title", internalName:'Title', columnType: ColumnType.Text },
            { columnName: "PageName",  internalName:'PageName', columnType: ColumnType.Text },
            { columnName: "Code",  internalName:'Code', columnType: ColumnType.Text },
            { columnName: "Description",  internalName:'Description', columnType: ColumnType.Text },
            { columnName: "SystemName",  internalName:'SystemName', columnType: ColumnType.Text },
            { columnName: "IsActive",  internalName:'IsActive', columnType: ColumnType.Boolean },

            { 
                columnName: "Application",
                internalName:'Application', 
                columnType: ColumnType.Lookup,
                lookupFieldName: "Application",
                lookupListName: "Id",
            },
            { 
                columnName: "Application:Title", 
                internalName:'Application_x003a_Title',
                columnType: ColumnType.Lookup,
                lookupFieldName: "Application",
                lookupListName: "Title",
            },
            { columnName: "Modified", internalName:'Modified', columnType: ColumnType.DateTime },
            { columnName: "Created",  internalName:'Created', columnType: ColumnType.DateTime },
            { columnName: "Created By",  internalName:'Author', columnType: ColumnType.User },
            { columnName: "Modified By",  internalName:'Editor', columnType: ColumnType.User },
  
        ],
      },


      {
        name: "Project",
        columns: [
            { columnName: "Title",  internalName:'Title', columnType: ColumnType.Text },
            { columnName: "Modified", internalName:'Modified', columnType: ColumnType.DateTime },
            { columnName: "Created",  internalName:'Created', columnType: ColumnType.DateTime },
            { columnName: "Actual_End_Date",  internalName:'Actual_End_Date', columnType: ColumnType.DateTime },
            { columnName: "Actual_Start_Date",  internalName:'Actual_Start_Date', columnType: ColumnType.DateTime },
            { columnName: "Description",  internalName:'Description', columnType: ColumnType.Text },
            { columnName: "Name",  internalName:'Name', columnType: ColumnType.Text },
            { columnName: "Planned_End_Date",  internalName:'Planned_End_Date', columnType: ColumnType.DateTime },
            { columnName: "Planned_Start_Date",  internalName:'Planned_Start_Date', columnType: ColumnType.DateTime },

            { 
                 columnName: "Status",
                 internalName:'Status',
                 columnType: ColumnType.Choice,
                 choices: [
                        "New",
                        "In Progress",
                        "On Hold",
                        "Cancelled",
                        "Completed",
                       "In Review",
                 ],
                },

            { columnName: "Budget", internalName:'Budget', columnType: ColumnType.Currency },

            { 
                columnName: "ProjectType",
                internalName:'ProjectType',
                columnType: ColumnType.Choice,
                choices: [
                        "Construction",
                        "Software Development",
                        "Water and Irrigation",

                ],
               },

  
        ],
      },

      {
        name: "ProjectComments",
        columns: [
          { columnName: "Title", intenalName:'Title',columnType: ColumnType.Text },
          { columnName: "Comments", intenalName:'Comments', columnType: ColumnType.Text },
          { 
            columnName: "Project:ID", 
            intenalName:'Project_x003a_ID', 
            columnType: ColumnType.Lookup,
            lookupFieldName: "Project",
            lookupListName: "ID",
        },
        { 
            columnName: "Project:Name", 
            intenalName:'Project_x003a_Name', 
            columnType: ColumnType.Lookup,
            lookupFieldName: "Project",
            lookupListName: "Name",
        },
        { columnName: "IsDeleted", intenalName:'IsDeleted', columnType: ColumnType.Boolean },
        { columnName: "Modified", intenalName:'Modified', columnType: ColumnType.DateTime },
        { columnName: "Created", intenalName:'Created', columnType: ColumnType.DateTime },
        { columnName: "Created By", intenalName:'Author', columnType: ColumnType.User },
        { columnName: "Modified By", intenalName:'Editor', columnType: ColumnType.User },

        ],
      },
      {
        name: "ProjectContractor",
        columns: [
          { columnName: "Title", intenalName:'Title',columnType: ColumnType.Text },
          { columnName: "Modified", intenalName:'Modified', columnType: ColumnType.DateTime },
          { columnName: "Created", intenalName:'Created', columnType: ColumnType.DateTime },
          { columnName: "IsDeleted", intenalName:'IsDeleted', columnType: ColumnType.Boolean },
          { 
            columnName: "Project", 
            intenalName:'Project', 
            columnType: ColumnType.Lookup,
            lookupFieldName: "Project",
            lookupListName: "Name",
        },
        { 
            columnName: "Contractor", 
            intenalName:'Contractor', 
            columnType: ColumnType.Lookup,
            lookupFieldName: "Contractor",
            lookupListName: "Name",
        },
        { columnName: "Industry", intenalName:'Industry', columnType: ColumnType.Text },
          { columnName: "Created By", intenalName:'Author', columnType: ColumnType.User },
          { columnName: "Modified By", intenalName:'Editor', columnType: ColumnType.User },
        ],
      },

      {
        name: "ProjectInitiation",
        columns: [
          { columnName: "Title", intenalName:'Title',columnType: ColumnType.Text },
          { columnName: "Phone", internalName: "Phone", columnType: ColumnType.Text },
          { columnName: "Sponsor", internalName: "Sponsor", columnType: ColumnType.Text },
          { columnName: "Customer", internalName: "Customer", columnType: ColumnType.Text },
          { columnName: "Objective", internalName: "Objective", columnType: ColumnType.Text },
          { columnName: "Deliverables", internalName: "Deliverables", columnType: ColumnType.Text },
          { columnName: "Comments", internalName: "Comments", columnType: ColumnType.Text },
        { columnName: "Budget", internalName: "Budget", columnType: ColumnType.Number },
        { columnName: "IsDeleted", intenalName:'IsDeleted', columnType: ColumnType.Boolean },

        { columnName: "Organization", internalName: "Organization", columnType: ColumnType.Text },
        { columnName: "ProjectStartDate", internalName: "ProjectStartDate", columnType: ColumnType.DateTime },
        { columnName: "ProjectDate", intenalName:'ProjectDate', columnType: ColumnType.DateTime },

        { columnName: "Language", 
        intenalName:'Language', 
        columnType: ColumnType.Choice,
        choices: ["Amharic", "English"],
        },
        { columnName: "ProjectEndDate", intenalName:'ProjectEndDate', columnType: ColumnType.DateTime },
        { columnName: "ProjectLanguage", intenalName:'ProjectLanguage', columnType: ColumnType.Text },
        { columnName: "EstimatedBudget", intenalName:'EstimatedBudget', columnType: ColumnType.Number },
        { columnName: "Department", intenalName:'Department', columnType: ColumnType.Text },
        { columnName: "AssignedToProject", intenalName:'AssignedToProject', columnType: ColumnType.Boolean },
        { columnName: "CreatorDepartment", intenalName:'CreatorDepartment', columnType: ColumnType.User },
        { columnName: "DepartmentName", intenalName:'DepartmentName', columnType: ColumnType.Text },
        { columnName: "BudgetCode", intenalName:'BudgetCode', columnType: ColumnType.Text },
        { columnName: "ProcurementReferenceNumber", intenalName:'ProcurementReferenceNumber', columnType: ColumnType.Text },
        { columnName: "ContractReferenceNumber", intenalName:'ContractReferenceNumber', columnType: ColumnType.Text },


          { columnName: "Modified", intenalName:'Modified', columnType: ColumnType.DateTime },
          { columnName: "Created", intenalName:'Created', columnType: ColumnType.DateTime },
          
      
          { columnName: "Created By", intenalName:'Author', columnType: ColumnType.User },
          { columnName: "Modified By", intenalName:'Editor', columnType: ColumnType.User },
        ],
      },

      {
        name: "ProjectSponsor",
        columns: [
          { columnName: "Title", intenalName:'Title',columnType: ColumnType.Text },
          { columnName: "Modified", intenalName:'Modified', columnType: ColumnType.DateTime },
          { columnName: "Created", intenalName:'Created', columnType: ColumnType.DateTime },
          { columnName: "IsDeleted", intenalName:'IsDeleted', columnType: ColumnType.Boolean },
          { columnName: "Sponsor", internalName: "Sponsor", columnType: ColumnType.Text },
          { 
            columnName: "Project", 
            intenalName:'Project', 
            columnType: ColumnType.Lookup,
            lookupFieldName: "Project",
            lookupListName: "Name",
        },
          { 
            columnName: "Project:Name", 
            intenalName:'Project_x003a_Name', 
            columnType: ColumnType.Lookup,
            lookupFieldName: "Project",
            lookupListName: "Name",
        },
  
        { columnName: "Industry", intenalName:'Industry', columnType: ColumnType.Text },
          { columnName: "Created By", intenalName:'Author', columnType: ColumnType.User },
          { columnName: "Modified By", intenalName:'Editor', columnType: ColumnType.User },
        ],
      },

      {
        name: "ProjectTeamMembers",
        columns: [
          { columnName: "Title", intenalName:'Title',columnType: ColumnType.Text },
          { columnName: "Member", intenalName:'Member',columnType: ColumnType.User },
          { columnName: "Role", intenalName:'Role',columnType: ColumnType.Text },
          { columnName: "FullName", intenalName:'FullName',columnType: ColumnType.Text },

          { columnName: "Modified", intenalName:'Modified', columnType: ColumnType.DateTime },
          { columnName: "Created", intenalName:'Created', columnType: ColumnType.DateTime },
          { columnName: "IsDeleted", intenalName:'IsDeleted', columnType: ColumnType.Boolean },
          { 
            columnName: "Project", 
            intenalName:'Project', 
            columnType: ColumnType.Lookup,
            lookupFieldName: "Project",
            lookupListName: "Name",
        },
          { 
            columnName: "Project:Name", 
            intenalName:'Project_x003a_Name', 
            columnType: ColumnType.Lookup,
            lookupFieldName: "Project",
            lookupListName: "Name",
        },
  
       
          { columnName: "Created By", intenalName:'Author', columnType: ColumnType.User },
          { columnName: "Modified By", intenalName:'Editor', columnType: ColumnType.User },
        ],
      },

      {
        name: "QualityMeasurement",
        columns: [
          { columnName: "Title", intenalName:'Title',columnType: ColumnType.Text },
          { columnName: "MinValue", intenalName:'MinValue',columnType: ColumnType.Number },
          { columnName: "MaxValue", intenalName:'MaxValue',columnType: ColumnType.Number },
        { columnName: "Description",internalName: "Description", columnType: ColumnType.Text },
        { columnName: "Measurement",internalName: "Measurment", columnType: ColumnType.Text },

          { columnName: "Modified", intenalName:'Modified', columnType: ColumnType.DateTime },
          { columnName: "Created", intenalName:'Created', columnType: ColumnType.DateTime },
        
          { columnName: "Created By", intenalName:'Author', columnType: ColumnType.User },
          { columnName: "Modified By", intenalName:'Editor', columnType: ColumnType.User },
        ],
      },
      {
        name: "Resource",
        columns: [
          { columnName: "Title", intenalName:'Title',columnType: ColumnType.Text },
          { columnName: "Modified", intenalName:'Modified', columnType: ColumnType.DateTime },
          { columnName: "Created", intenalName:'Created', columnType: ColumnType.DateTime },
        
        { columnName: "Description",internalName: "Description", columnType: ColumnType.Text },
        { columnName: "Name",internalName: "Name", columnType: ColumnType.Text },
        { columnName: "Quantity",internalName: "Quantity", columnType: ColumnType.Text },

        { columnName: "StatusOfAllocation",
          internalName: "StatusOfAllocation", 
          columnType: ColumnType.Choice ,
          choices: [
            'Reserved',
            'Allocated',
            'To Reserve'
            ],
        },
        
        { columnName: "LevelOfRisk",
          internalName: "LevelOfRisk", 
          columnType: ColumnType.Choice ,
          choices: [
            "Low",
            "Medium",
            "High"
            ],

          
        },
        { columnName: "DurationRequired", intenalName:'DurationRequired', columnType: ColumnType.Number },
        { columnName: "AvailableTimePeriod", intenalName:'DurationRequired', columnType: ColumnType.DateTime },

        { columnName: "ResourceType",
        internalName: "ResourceType", 
        columnType: ColumnType.Choice ,
        choices: [
        
          ],   
      },
      { columnName: "Source", intenalName:'Source', columnType: ColumnType.Text },
      { columnName: "IsDeleted", intenalName:'IsDeleted', columnType: ColumnType.Boolean },

      { 
        columnName: "Project", 
        intenalName:'Project', 
        columnType: ColumnType.Lookup,
        lookupFieldName: "Project",
        lookupListName: "Name",
    },
    { 
        columnName: "Milestone", 
        intenalName:'Milestone', 
        columnType: ColumnType.Lookup,
        lookupFieldName: "Milestone",
        lookupListName: "ID",
    },
    { 
        columnName: "Milestone:ID", 
        intenalName:'Milestone_x003a_ID', 
        columnType: ColumnType.Lookup,
        lookupFieldName: "Milestone",
        lookupListName: "ID",
    },
    { 
        columnName: "Milestone:Name", 
        intenalName:'Milestone_x003a_Name', 
        columnType: ColumnType.Lookup,
        lookupFieldName: "Milestone",
        lookupListName: "Name",
    },
    { 
        columnName: "Task", 
        intenalName:'Task', 
        columnType: ColumnType.Lookup,
        lookupFieldName: "Task",
        lookupListName: "Name",
    },
    { 
        columnName: "Task:ID", 
        intenalName:'Task_x003a_ID', 
        columnType: ColumnType.Lookup,
        lookupFieldName: "Task",
        lookupListName: "ID",
    },
    { 
        columnName: "Task:Name", 
        intenalName:'Task_x003a_Name', 
        columnType: ColumnType.Lookup,
        lookupFieldName: "Task",
        lookupListName: "Name",
    },
    { columnName: "Cost", intenalName:'Cost', columnType: ColumnType.Currency },
    { columnName: "Language", intenalName:'Language', columnType: ColumnType.Text },
    
          { columnName: "Created By", intenalName:'Author', columnType: ColumnType.User },
          { columnName: "Modified By", intenalName:'Editor', columnType: ColumnType.User },
        ],
      },
      {
        name: "Risk",
        columns: [
          { columnName: "Title", intenalName:'Title',columnType: ColumnType.Text },
        
        { columnName: "Description",internalName: "Description", columnType: ColumnType.Text },
        { columnName: "IsDeleted", internalName: "IsDeleted", columnType: ColumnType.Boolean },
        { columnName: "Name", internalName: "Name", columnType: ColumnType.Text },
        {
            columnName: "Level",
            internalName:'Level',
            columnType: ColumnType.Choice,
            choices: [
                'Low',
               'Moderate',
                'High'
            ],
          },
          { 
            columnName: "Status",
            internalName:'Status',
            columnType: ColumnType.Choice,
            choices: [
                'Identified',
                'Assessed',
                'Controlled',
                'Closed'    
            ],
           },
           { 
            columnName: "Catagory",
            internalName:'Catagory',
            columnType: ColumnType.Choice,
            choices: [
                'Environmental',
                'Organizational',
                'Internal',
               'External',
               'Technical',
               'Legal'
                
            ],
           },
           { 
            columnName: "Probability",
            internalName:'Probability',
            columnType: ColumnType.Choice,
            choices: [
                'Urgent',
                'High',
                'Medium',
                'Low',
            ],
           },
           { columnName: "IsDeleted", internalName: "IsDeleted", columnType: ColumnType.Boolean },
           { 
            columnName: "Response",
            internalName:'Response',
            columnType: ColumnType.Choice,
            choices: [
                'Avoid',
                'Mitigate',
               'Transfer',
                'Accept',
                
            ],
           },
           { columnName: "Solution", intenalName:'Solution', columnType: ColumnType.Text },
           {
            columnName: "Project",
            internalName:'Project',
            columnType: ColumnType.Lookup,
            lookupFieldName: "Project",
            lookupListName: "Name",
          },
          {
            columnName: "Assignee",
            internalName:"Assignee",
            columnType: ColumnType.Lookup,
            lookupFieldName: "Contractor",
            lookupListName: "Name",
          },
          { columnName: "Issue", intenalName:'Issue', columnType: ColumnType.Text },
          { 
            columnName: "Priority",
            internalName:'Priority',
            columnType: ColumnType.Choice,
            choices: [
                "High",
                "Low",
                "Medium",   
            ],
           },
           { columnName: "ImpactOfRisk", intenalName:'ImpactOfRisk', columnType: ColumnType.Text },
          { columnName: "Mitigation Action", intenalName:'MitigatonAction', columnType: ColumnType.Text },
          { columnName: "Modified Date", intenalName:'Modified', columnType: ColumnType.DateTime },
          { columnName: "Created Date", intenalName:'Created', columnType: ColumnType.DateTime },
        
          { columnName: "Created By", intenalName:'Author', columnType: ColumnType.User },
          { columnName: "Modified By", intenalName:'Editor', columnType: ColumnType.User },
        ],
      },
      {
        name: "RolePermission",
        columns: [
          { columnName: "Title", intenalName:'Title',columnType: ColumnType.Text },
          {
            columnName: "Permission",
            internalName:"Permission",
            columnType: ColumnType.Lookup,
            lookupFieldName: "Permissions",
            lookupListName: "ID",
          },
          {
            columnName: "Permission:PermissionName",
            internalName:"Permission_x003a_PermissionName",
            columnType: ColumnType.Lookup,
            lookupFieldName: "Permissions",
            lookupListName: "",
          },
          {
            columnName: "RoleResource",
            internalName:"RoleResource",
            columnType: ColumnType.Lookup,
            lookupFieldName: "RoleResource",
            lookupListName: "ID",
          },
          {
            columnName: "RoleResource:Title",
            internalName:"RoleResource_x003a_Title",
            columnType: ColumnType.Lookup,
            lookupFieldName: "RoleResource",
            lookupListName: "Title",
          },
          { columnName: "Modified", intenalName:'Modified', columnType: ColumnType.DateTime },
          { columnName: "Created", intenalName:'Created', columnType: ColumnType.DateTime },
        
          { columnName: "Created By", intenalName:'Author', columnType: ColumnType.User },
          { columnName: "Modified By", intenalName:'Editor', columnType: ColumnType.User },
        ],
      },
      {
        name: "Sponser",
        columns: [
          { columnName: "Title", intenalName:'Title',columnType: ColumnType.Text },
          { columnName: "Phone", internalName: "Phone", columnType: ColumnType.Text },
          { columnName: "Email", internalName: "Email", columnType: ColumnType.Text },
          { columnName: "IsDeleted", internalName: "IsDeleted", columnType: ColumnType.Boolean },
          { columnName: "Name", internalName: "Name",columnType: ColumnType.Text },


          {
              columnName: "Industry",
              internalName: "Industry",
              columnType: ColumnType.Choice,
              choices: ["Construction", "IT", "Health"],
            }, 
            {
                columnName: "Project",
                internalName:'Project',
                columnType: ColumnType.Lookup,
                lookupFieldName: "Project",
                lookupListName: "ID",
              },
        { columnName: "Description",internalName: "Description", columnType: ColumnType.Text },
       

          { columnName: "Modified", intenalName:'Modified', columnType: ColumnType.DateTime },
          { columnName: "Created", intenalName:'Created', columnType: ColumnType.DateTime },
        
          { columnName: "Created By", intenalName:'Author', columnType: ColumnType.User },
          { columnName: "Modified By", intenalName:'Editor', columnType: ColumnType.User },
        ],
      },
      {
        name: "Task",
        columns: [
          { columnName: "Title", intenalName:'Title',columnType: ColumnType.Text },
          { columnName: "IsDeleted", internalName: "IsDeleted", columnType: ColumnType.Boolean },
          { columnName: "Name", internalName: "Name",columnType: ColumnType.Text },
          { columnName: "Actual_End_Date", internalName: "Actual_End_Date", columnType: ColumnType.DateTime },
          { columnName: "Actual_Start_Date", internalName: "Actual_Start_Date", columnType: ColumnType.DateTime },
          { columnName: "Planned_End_Date",internalName: "Planned_End_Date", columnType: ColumnType.DateTime },
          { columnName: "Planned_Start_Date", internalName: "Planned_Start_Date", columnType: ColumnType.DateTime },
        { columnName: "Description",internalName: "Description", columnType: ColumnType.Text },
        { 
            columnName: "Priority",
            internalName:'Priority',
            columnType: ColumnType.Choice,
            choices: [
                "High",
                "Low",
                "Medium",   
            ],
           },
           {
            columnName: "Status",
            internalName: "Status",
            columnType: ColumnType.Choice,
            choices: ["New", "On Hold", "In Progress","Cancelled","In Review","Completed"],
        },
        { columnName: "Owner", intenalName:'Owner', columnType: ColumnType.User },
        { columnName: "AssignedTo", intenalName:'AssignedTo', columnType: ColumnType.User },
        { columnName: "PercentageOfComplation", intenalName:'PercentageOfComplation', columnType: ColumnType.Number },
        { 
            columnName: "Milestone", 
            intenalName:'Milestone', 
            columnType: ColumnType.Lookup,
            lookupFieldName: "Milestone",
            lookupListName: "ID",
        },
        {
            columnName: "Project",
            internalName:'Project',
            columnType: ColumnType.Lookup,
            lookupFieldName: "Project",
            lookupListName: "ID",
          },
          {
            columnName: "ParentTask",
            internalName:'ParentTask',
            columnType: ColumnType.Lookup,
            lookupFieldName: "Project",
            lookupListName: "Name",
          },
          {
            columnName: "PredecessorTask",
            internalName:'PredecessorTask',
            columnType: ColumnType.Lookup,
            lookupFieldName: "Task",
            lookupListName: "ID",
          },
          { columnName: "Task_Status", intenalName:'Task_Status', columnType: ColumnType.Number },
          { columnName: "Assigned_User", intenalName:'Assigned_User', columnType: ColumnType.Text },
          { columnName: "Project_Name", intenalName:'Project_Name', columnType: ColumnType.Text },
          { columnName: "Milestone_Name", intenalName:'Milestone_Name', columnType: ColumnType.Text },
          { columnName: "Language", intenalName:'Language', columnType: ColumnType.Text },
          { columnName: "Compilation_Date", intenalName:'Compilation_Date', columnType: ColumnType.DateTime },
          { columnName: "EstimatePercentage", intenalName:'EstimatePercentage', columnType: ColumnType.Number },
          { columnName: "DelayNotified", intenalName:'elayNotified', columnType: ColumnType.Boolean },

          { columnName: "Modified Date", intenalName:'Modified', columnType: ColumnType.DateTime },
          { columnName: "Created Date", intenalName:'Created', columnType: ColumnType.DateTime },
        
          { columnName: "Created By", intenalName:'Author', columnType: ColumnType.User },
          { columnName: "Modified By", intenalName:'Editor', columnType: ColumnType.User },
        ],
      },

      {
        name: "TaskTemplate",
        columns: [
          { columnName: "Title", intenalName:'Title',columnType: ColumnType.Text },        
        { columnName: "TaskName",internalName: "TaskName", columnType: ColumnType.Text },
        { columnName: "EstimatePercentage", intenalName:'EstimatePercentage', columnType: ColumnType.Number },
        { columnName: "EstimateDuration", intenalName:'EstimateDuration', columnType: ColumnType.Number },
        { 
            columnName: "MilestoneTemplate", 
            intenalName:'MilestoneTemplate', 
            columnType: ColumnType.Lookup,
            lookupFieldName: "MilestoneTemplate",
            lookupListName: "ID",
        },
        { 
            columnName: "MilestoneTemplate:MilestonName", 
            intenalName:'MilestoneTemplate_x003a_Mileston', 
            columnType: ColumnType.Lookup,
            lookupFieldName: "MilestoneTemplate",
            lookupListName: "MilestoneName",
        },
          { columnName: "Modified", intenalName:'Modified', columnType: ColumnType.DateTime },
          { columnName: "Created", intenalName:'Created', columnType: ColumnType.DateTime },
        
          { columnName: "Created By", intenalName:'Author', columnType: ColumnType.User },
          { columnName: "Modified By", intenalName:'Editor', columnType: ColumnType.User },
        ],
      },
      {
        name: "UserRole",
        columns: [
          { columnName: "Title", intenalName:'Title',columnType: ColumnType.Text },        
        { columnName: "TaskName",internalName: "TaskName", columnType: ColumnType.Text },
        { columnName: "User", intenalName:'User', columnType: ColumnType.User },
        { 
            columnName: "Role", 
            intenalName:'Role', 
            columnType: ColumnType.Lookup,
            lookupFieldName: "Role",
            lookupListName: "ID",
        },
        { 
            columnName: "Role:RoleName", 
            intenalName:'Role_x003a_RoleName', 
            columnType: ColumnType.Lookup,
            lookupFieldName: "Role",
            lookupListName: "RoleName",
        },
          { columnName: "Modified", intenalName:'Modified', columnType: ColumnType.DateTime },
          { columnName: "Created", intenalName:'Created', columnType: ColumnType.DateTime },
        
          { columnName: "Created By", intenalName:'Author', columnType: ColumnType.User },
          { columnName: "Modified By", intenalName:'Editor', columnType: ColumnType.User },
        ],
      },
    
  ],
};